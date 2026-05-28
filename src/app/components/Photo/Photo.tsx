import Image from "next/image";
import type { ImgHTMLAttributes } from "react";

const WIDTHS = [400, 800, 1200, 2400];
const BASE = "https://images.kusakinphoto.com";

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "loading"
> & {
  source?: "bunny" | "vercel";
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

export default function Photo({
  source = "bunny",
  src,
  width,
  height,
  sizes = "100vw",
  alt,
  className,
  priority = false,
  ...rest
}: Props) {
  if (source === "vercel") {
    return (
      <Image
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        alt={alt}
        className={className}
        priority={priority}
        {...rest}
      />
    );
  }

  const srcSet = WIDTHS.map((w) => `${BASE}/${src}-${w}.webp ${w}w`).join(", ");

  return (
    <img
      src={`${BASE}/${src}-1200.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ width: "100%", height: "auto" }}
      {...rest}
    />
  );
}
