import { successStories } from "@/lib/success-stories";
import styles from "./success-stories.module.css";

export function SuccessStories() {
  if (successStories.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="success-stories-title">
      <div className={styles.heading}>
        <span>Real outcomes</span>
        <h2 id="success-stories-title">যারা আগে scholarship পেয়েছেন</h2>
      </div>
      <div className={styles.grid}>
        {successStories.map((story) => (
          <article className={styles.card} key={story.name}>
            <blockquote>&ldquo;{story.quote}&rdquo;</blockquote>
            <footer>
              <b>{story.name}</b>
              <span>{story.outcome} · {story.country}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
