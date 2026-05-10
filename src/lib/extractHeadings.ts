export interface Heading {
  level: 2 | 3;
  text: string;
  id: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractHeadings(content: string): Heading[] {
  const lines = content.split("\n");
  const headings: Heading[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = match[2].trim();
      headings.push({ level, text, id: slugify(text) });
    }
  }

  return headings;
}
