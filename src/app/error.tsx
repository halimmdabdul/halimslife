"use client";

import Link from "next/link";

export default function ErrorPage({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main className="route-state route-error container">
      <span className="route-state-code">!</span>
      <p className="kicker">Something went wrong</p>
      <h1>পেজটি এখন load করা যাচ্ছে না।</h1>
      <p>
        এটি সাময়িক network বা server সমস্যা হতে পারে। আবার চেষ্টা করুন, অথবা
        নিরাপদে homepage-এ ফিরে যান।
      </p>
      <div className="route-state-actions">
        <button className="primary-button" type="button" onClick={unstable_retry}>
          Try again
        </button>
        <Link className="secondary-button" href="/">Homepage</Link>
      </div>
    </main>
  );
}
