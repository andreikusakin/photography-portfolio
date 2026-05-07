import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import CloudinaryImage from '@/app/components/CloudinaryImage/CloudinaryImage';
import styles from './guides.module.css';
import SmallHero from '@/app/components/SmallHero/SmallHero';

const components = {
  CloudinaryImage,
};

// Update Type Definition
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  // AWAIT params here
  const { slug } = await params;
  
  try {
    const { meta } = getPostBySlug(slug, 'guides');
    return {
      title: `${meta.title} | Andrew Photography`,
      description: meta.excerpt,
    };
  } catch {
    return { title: 'Guide Not Found' };
  }
}

// Make the component async and await params
export default async function Guide({ params }: Props) {
  // AWAIT params here
  const { slug } = await params;
  
  let guide;
  try {
    guide = getPostBySlug(slug, 'guides');
  } catch (e) {
    notFound();
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <SmallHero
        title="Pricing"
        subtitle="Boston Wedding Photographer"
        // image={HeroImage}
      />
        <h1 className={styles.title}>{guide.meta.title}</h1>
        <time className={styles.date}>{guide.meta.date}</time>
      </header>
      <div className={styles.content}>
        <MDXRemote source={guide.content} components={components} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const guides = getAllPosts('guides');
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}