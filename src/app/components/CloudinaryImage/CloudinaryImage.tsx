'use client'; 
import { CldImage } from 'next-cloudinary';
import styles from './CloudinaryImage.module.css'; 

interface Props {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  caption?: string;
}

export default function CloudinaryImage({ src, alt, width, height, caption }: Props) {
  const widthNum = Number(width);
  const heightNum = Number(height);

  return (
    <figure className={styles.imageContainer}>
      <CldImage
        src={src}
        width={widthNum}
        height={heightNum}
        alt={alt}
        // PERFORMANCE: 100vw on mobile, but capped at 800px (or your max layout width) on desktop
        sizes="(max-width: 768px) 100vw, 800px"
        format="auto"
        quality="auto"
        // RESPONSIVENESS: This makes it scale fluidly
        style={{ width: '100%', height: 'auto' }} 
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}