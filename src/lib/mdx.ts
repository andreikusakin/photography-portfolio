import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the shape of your Frontmatter
export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  author?: string;
  tags?: string[];
}

const root = process.cwd();

export function getPostBySlug(slug: string, type: 'blog' | 'guides') {
  const realSlug = slug.replace(/\.mdx$/, '');
  
  // ADD 'src' HERE:
  const filePath = path.join(root, 'src', 'content', type, `${realSlug}.mdx`);
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContent);

  return { 
    meta: { ...data, slug: realSlug } as PostMetadata, 
    content 
  };
}

export function getAllPosts(type: 'blog' | 'guides') {
  const dirPath = path.join(root, 'src', 'content', type);
  
  // DEBUG: Print the path to the terminal
  console.log(`Checking path: ${dirPath}`);
  
  // Defensive check
  if (!fs.existsSync(dirPath)) {
    console.error(`ERROR: Directory not found at ${dirPath}`);
    return []; // Return empty array instead of crashing
  }

  const files = fs.readdirSync(dirPath);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const { meta } = getPostBySlug(slug, type);
    return meta;
  });

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}