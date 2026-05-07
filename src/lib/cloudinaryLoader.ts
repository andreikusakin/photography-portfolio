import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const params = [
    "f_auto",
    `q_${quality || "auto"}`,
    "c_limit",
    `w_${width}`,
  ];
  return src.replace("/upload/", `/upload/${params.join(",")}/`);
}
