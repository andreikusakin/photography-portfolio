import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information | Boston Wedding Photographer",
  alternates: {
    canonical: '/information',
  }
};

export default function InformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
