import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { extractHeadings, slugify } from "@/lib/extractHeadings";
import CloudinaryImage from "@/app/components/CloudinaryImage/CloudinaryImage";
import ImageGrid from "@/app/components/ImageGrid/ImageGrid";
import JournalCover from "@/app/components/JournalCover/JournalCover";
import LocalImage from "@/app/components/LocalImage/LocalImage";
import GetInTouch from "@/app/components/GetInTouch/GetInTouch";
import JsonLd from "@/app/components/JsonLd/JsonLd";
import TableOfContents from "@/app/components/TableOfContents/TableOfContents";
import styles from "./guides.module.css";

const SITE_URL = "https://www.kusakinphoto.com";
const DEFAULT_AUTHOR = "Andrew Kusakin";

function flattenChildren(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (React.isValidElement(child)) {
        const props = child.props as { children?: React.ReactNode };
        return flattenChildren(props.children);
      }
      return "";
    })
    .join("");
}

function H2({ children }: { children?: React.ReactNode }) {
  return <h2 id={slugify(flattenChildren(children))}>{children}</h2>;
}

function H3({ children }: { children?: React.ReactNode }) {
  return <h3 id={slugify(flattenChildren(children))}>{children}</h3>;
}

const components = { CloudinaryImage, ImageGrid, LocalImage, h2: H2, h3: H3 };

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
  if (publicId.startsWith("/")) {
    return `${SITE_URL}${publicId}`;
  }
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
    const { meta } = getPostBySlug(slug, "guides");
    const ogImage = meta.coverImage
      ? cloudinaryOgUrl(meta.coverImage)
      : `${SITE_URL}/logo.png`;

    return {
      title: `${meta.title} | Andrew Kusakin Photography`,
      description: meta.excerpt,
      keywords: meta.tags,
      alternates: { canonical: `/guides/${slug}` },
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.excerpt,
        url: `${SITE_URL}/guides/${slug}`,
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
    return { title: "Guide Not Found" };
  }
}

export default async function Guide({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug, "guides");
  } catch {
    notFound();
  }

  const minutes = readingTime(post.content);
  const headings = extractHeadings(post.content);
  const postUrl = `${SITE_URL}/guides/${slug}`;
  const ogImage = post.meta.coverImage
    ? cloudinaryOgUrl(post.meta.coverImage)
    : `${SITE_URL}/logo.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
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
        name: "Guides",
        item: `${SITE_URL}/guides`,
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
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/guides" className={styles.back}>
            ← Guides
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

        <div className={styles.body}>
          <div className={styles.content}>
            <MDXRemote source={post.content} components={components} />
          </div>
          <aside className={styles.tocAside}>
            <TableOfContents headings={headings} />
          </aside>
        </div>

        <GetInTouch />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts("guides");
  return posts.map((post) => ({ slug: post.slug }));
}
