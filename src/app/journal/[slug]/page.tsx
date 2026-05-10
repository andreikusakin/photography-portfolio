import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import CloudinaryImage from "@/app/components/CloudinaryImage/CloudinaryImage";
import ImageGrid from "@/app/components/ImageGrid/ImageGrid";
import JournalCover from "@/app/components/JournalCover/JournalCover";
import LocalImage from "@/app/components/LocalImage/LocalImage";
import GetInTouch from "@/app/components/GetInTouch/GetInTouch";
import JsonLd from "@/app/components/JsonLd/JsonLd";
import styles from "./post.module.css";

const SITE_URL = "https://www.kusakinphoto.com";
const DEFAULT_AUTHOR = "Andrew Kusakin";

const components = { CloudinaryImage, ImageGrid, LocalImage };

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function cloudinaryOgUrl(publicId: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/${publicId}`;
}

function readingTime(content: string): number {
  const text = content
    .replace(/<[^>]+>/g, "")
    .replace(/\{[^}]+\}/g, "");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug, "blog");
    const ogImage = meta.coverImage
      ? cloudinaryOgUrl(meta.coverImage)
      : `${SITE_URL}/logo.png`;

    return {
      title: `${meta.title} | Andrew Kusakin Photography`,
      description: meta.excerpt,
      keywords: meta.tags,
      alternates: { canonical: `/journal/${slug}` },
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.excerpt,
        url: `${SITE_URL}/journal/${slug}`,
        publishedTime: meta.date,
        authors: [meta.author ?? DEFAULT_AUTHOR],
        tags: meta.tags,
        images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.excerpt,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug, "blog");
  } catch {
    notFound();
  }

  const minutes = readingTime(post.content);
  const postUrl = `${SITE_URL}/journal/${slug}`;
  const ogImage = post.meta.coverImage
    ? cloudinaryOgUrl(post.meta.coverImage)
    : `${SITE_URL}/logo.png`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.excerpt,
    datePublished: post.meta.date,
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
    author: {
      "@type": "Person",
      name: post.meta.author ?? DEFAULT_AUTHOR,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Andrew Kusakin Photography",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    ...(post.meta.tags?.length
      ? { keywords: post.meta.tags.join(", ") }
      : {}),
    timeRequired: `PT${minutes}M`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: `${SITE_URL}/journal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.meta.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/journal" className={styles.back}>
            ← Journal
          </Link>
          <time className={styles.date} dateTime={post.meta.date}>
            {formatDate(post.meta.date)}
          </time>
          <h1 className={styles.title}>{post.meta.title}</h1>
          {post.meta.excerpt && (
            <p className={styles.excerpt}>{post.meta.excerpt}</p>
          )}
        </header>

        {post.meta.coverImage && (
          <div className={styles.cover}>
            <JournalCover
              src={post.meta.coverImage}
              width={1600}
              height={1000}
              alt={post.meta.title}
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div className={styles.content}>
          <MDXRemote source={post.content} components={components} />
        </div>

        <GetInTouch />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({ slug: post.slug }));
}
