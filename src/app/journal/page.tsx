import Link from "next/link";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import JournalCover from "../components/JournalCover/JournalCover";
import { getAllPosts } from "@/lib/mdx";
import HeroImage from "./../../../public/about/ak4.jpg";
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

  return (
    <div>
      <SmallHero
        title="Journal"
        subtitle="Stories from behind the camera"
        image={HeroImage}
      />
      <div className={styles.container}>
        {posts.length === 0 ? (
          <p className={styles.empty}>
            New stories are on the way. Check back soon.
          </p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.card}>
                <Link href={`/journal/${post.slug}`} className={styles.cardLink}>
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
                    <time className={styles.date}>{formatDate(post.date)}</time>
                    <h2 className={styles.title}>{post.title}</h2>
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
      </div>
      <GetInTouch />
    </div>
  );
}
