import Link from "next/link";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import JournalCover from "../components/JournalCover/JournalCover";
import { getAllPosts } from "@/lib/mdx";
import HeroImage from "./wedding_rings.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Guides | Andrew Kusakin Photography",
  description:
    "Wedding photography guides and tips from Andrew Kusakin — helping you prepare for your big day.",
  alternates: { canonical: "/guides" },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Guides() {
  const posts = getAllPosts("guides");

  return (
    <div>
      <SmallHero
        title="Guides"
        subtitle="Everything you need to know"
        image={HeroImage}
        alt="A wedding day moment by Andrew Kusakin, Boston wedding photographer"
      />
      <div className={styles.container}>
        {posts.length === 0 ? (
          <p className={styles.empty}>Guides are on the way. Check back soon.</p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.card}>
                <Link href={`/guides/${post.slug}`} className={styles.cardLink}>
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
                    <span className={styles.read}>Read guide</span>
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
