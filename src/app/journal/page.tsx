import Link from "next/link";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import JournalCover from "../components/JournalCover/JournalCover";
import { getAllPosts } from "@/lib/mdx";
import HeroImage from "./wedding_venue.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journal | Andrew Kusakin Photography",
  description:
    "Stories, reflections, and behind-the-scenes from weddings and portrait sessions by Andrew Kusakin.",
  alternates: {
    canonical: "/journal",
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Journal() {
  const posts = getAllPosts("blog");
  const [featured, ...rest] = posts;

  return (
    <div>
      <SmallHero
        title="Journal"
        subtitle="Stories from behind the camera"
        image={HeroImage}
        alt="A behind-the-scenes wedding moment by Andrew Kusakin"
      />

      <div className={styles.container}>
        {posts.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyEyebrow}>The Journal</p>
            <p className={styles.emptyText}>
              New stories are on the way. Check back soon.
            </p>
          </div>
        ) : (
          <>
            {/* Latest story — full-width feature so the list never looks sparse */}
            <Link
              href={`/journal/${featured.slug}`}
              className={styles.featured}
            >
              {featured.coverImage && (
                <div className={styles.featuredCover}>
                  <JournalCover
                    src={featured.coverImage}
                    width={1200}
                    height={800}
                    alt={featured.title}
                    sizes="(max-width: 991px) 100vw, 58vw"
                    priority
                  />
                </div>
              )}
              <div className={styles.featuredMeta}>
                <p className={styles.eyebrow}>Latest Story</p>
                <time className={styles.date}>{formatDate(featured.date)}</time>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                {featured.excerpt && (
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                )}
                <span className={styles.read}>Read story</span>
              </div>
            </Link>

            {rest.length > 0 && (
              <ul className={styles.list}>
                {rest.map((post) => (
                  <li key={post.slug} className={styles.card}>
                    <Link
                      href={`/journal/${post.slug}`}
                      className={styles.cardLink}
                    >
                      {post.coverImage && (
                        <div className={styles.cover}>
                          <JournalCover
                            src={post.coverImage}
                            width={900}
                            height={600}
                            alt={post.title}
                            sizes="(max-width: 767px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className={styles.meta}>
                        <time className={styles.date}>
                          {formatDate(post.date)}
                        </time>
                        <h3 className={styles.title}>{post.title}</h3>
                        {post.excerpt && (
                          <p className={styles.excerpt}>{post.excerpt}</p>
                        )}
                        <span className={styles.read}>Read story</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <GetInTouch />
    </div>
  );
}
