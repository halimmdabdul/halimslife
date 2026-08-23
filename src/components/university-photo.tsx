"use client";

import { useEffect, useState } from "react";

import styles from "./university-photo.module.css";

type UniversityPhotoProps = {
  university: string;
  fallbackSrc: string;
};

type WikimediaPage = {
  pageid: number;
  index?: number;
  title: string;
  thumbnail?: { source: string };
};

type PhotoState = {
  source: string;
  sourcePage: string;
};

function cacheKey(university: string) {
  return `halim-university-photo:${university.toLocaleLowerCase()}`;
}

export function UniversityPhoto({ university, fallbackSrc }: UniversityPhotoProps) {
  const [photo, setPhoto] = useState<PhotoState | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPhoto() {
      const stored = window.sessionStorage.getItem(cacheKey(university));
      if (stored) {
        await Promise.resolve();
        setPhoto(JSON.parse(stored) as PhotoState);
        return;
      }

      const params = new URLSearchParams({
        action: "query",
        format: "json",
        formatversion: "2",
        generator: "search",
        gsrsearch: `${university} university campus`,
        gsrnamespace: "0",
        gsrlimit: "3",
        prop: "pageimages",
        piprop: "thumbnail",
        pithumbsize: "700",
        pilicense: "free",
        origin: "*",
      });

      try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json() as { query?: { pages?: WikimediaPage[] } };
        const pages = (data.query?.pages ?? []).filter((page) => page.thumbnail?.source).sort((a, b) => (a.index ?? 99) - (b.index ?? 99));
        const match = pages[0];
        if (!match?.thumbnail) return;
        const nextPhoto = {
          source: match.thumbnail.source,
          sourcePage: `https://en.wikipedia.org/?curid=${match.pageid}`,
        };
        window.sessionStorage.setItem(cacheKey(university), JSON.stringify(nextPhoto));
        setPhoto(nextPhoto);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) return;
      }
    }

    void loadPhoto();
    return () => controller.abort();
  }, [university]);

  return (
    <div
      className={styles.photo}
      style={{ backgroundImage: `url("${photo?.source ?? fallbackSrc}")` }}
      role="img"
      aria-label={`${university} campus`}
    >
      {photo && <a href={photo.sourcePage} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Real photo · Wikipedia ↗</a>}
    </div>
  );
}
