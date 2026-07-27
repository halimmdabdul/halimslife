import "server-only";

import { createSign } from "node:crypto";

export type SearchQueryRow = {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export type SearchPerformanceResult = {
  configured: boolean;
  error?: string;
  rows: SearchQueryRow[];
};

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

async function getGoogleAccessToken() {
  const email = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!email || !privateKey) {
    return null;
  }

  const now = Math.floor(Date.now() / 1000);
  const encodedHeader = toBase64Url(
    JSON.stringify({ alg: "RS256", typ: "JWT" }),
  );
  const encodedPayload = toBase64Url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(privateKey).toString("base64url");

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsignedToken}.${signature}`,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Google service-account authorization failed.");
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Google did not return an access token.");
  }

  return data.access_token;
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export async function getGoogleSearchPerformance(): Promise<SearchPerformanceResult> {
  const siteUrl =
    process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || "sc-domain:halimslife.com";

  if (
    !process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY
  ) {
    return { configured: false, rows: [] };
  }

  try {
    const accessToken = await getGoogleAccessToken();
    const endDate = new Date();
    endDate.setUTCDate(endDate.getUTCDate() - 3);
    const startDate = new Date(endDate);
    startDate.setUTCDate(startDate.getUTCDate() - 27);

    const response = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          dimensions: ["query"],
          type: "web",
          rowLimit: 50,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`Google Search Console returned ${response.status}.`);
    }

    const data = (await response.json()) as {
      rows?: Array<{
        keys: string[];
        clicks: number;
        impressions: number;
        ctr: number;
        position: number;
      }>;
    };

    return {
      configured: true,
      rows: (data.rows ?? []).map((row) => ({
        query: row.keys[0] ?? "(unknown query)",
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
      })),
    };
  } catch (error) {
    return {
      configured: true,
      error:
        error instanceof Error
          ? error.message
          : "Google Search Console request failed.",
      rows: [],
    };
  }
}

type BingQueryStat = {
  Query?: string;
  Clicks?: number;
  Impressions?: number;
  AvgImpressionPosition?: number;
};

export async function getBingSearchPerformance(): Promise<SearchPerformanceResult> {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;
  const siteUrl =
    process.env.BING_WEBMASTER_SITE_URL || "https://halimslife.com/";

  if (!apiKey) {
    return { configured: false, rows: [] };
  }

  try {
    const url = new URL(
      "https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats",
    );
    url.searchParams.set("siteUrl", siteUrl);
    url.searchParams.set("apikey", apiKey);

    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Bing Webmaster Tools returned ${response.status}.`);
    }

    const data = (await response.json()) as { d?: BingQueryStat[] };
    const aggregated = new Map<
      string,
      { clicks: number; impressions: number; weightedPosition: number }
    >();

    for (const item of data.d ?? []) {
      const query = item.Query?.trim();
      if (!query) continue;

      const clicks = item.Clicks ?? 0;
      const impressions = item.Impressions ?? 0;
      const current = aggregated.get(query) ?? {
        clicks: 0,
        impressions: 0,
        weightedPosition: 0,
      };
      current.clicks += clicks;
      current.impressions += impressions;
      current.weightedPosition +=
        (item.AvgImpressionPosition ?? 0) * impressions;
      aggregated.set(query, current);
    }

    const rows = [...aggregated.entries()]
      .map(([query, value]) => ({
        query,
        clicks: value.clicks,
        impressions: value.impressions,
        ctr: value.impressions ? value.clicks / value.impressions : 0,
        position: value.impressions
          ? value.weightedPosition / value.impressions
          : 0,
      }))
      .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
      .slice(0, 50);

    return { configured: true, rows };
  } catch (error) {
    return {
      configured: true,
      error:
        error instanceof Error
          ? error.message
          : "Bing Webmaster Tools request failed.",
      rows: [],
    };
  }
}
