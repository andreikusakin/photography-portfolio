import Image from "next/image";
import styles from "./LocalImage.module.css";

interface Props {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  caption?: string;
}

export default function LocalImage({ src, alt, width, height, caption }: Props) {
  return (
    <figure className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ width: "100%", height: "auto" }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
