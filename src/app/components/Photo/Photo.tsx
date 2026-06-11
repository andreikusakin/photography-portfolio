import type { ImgHTMLAttributes } from "react";

const WIDTHS = [400, 800, 1200, 2400];
const BASE = "https://images.kusakinphoto.com";

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "loading"
> & {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

export default function Photo({
  src,
  width,
  height,
  sizes = "100vw",
  alt,
  className,
  priority = false,
  style,
  ...rest
}: Props) {
  const srcSet = WIDTHS.map((w) => `${BASE}/${src}-${w}.webp ${w}w`).join(", ");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${BASE}/${src}-1200.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={{ width: "100%", height: "auto", ...style }}
      {...rest}
    />
  );
}
