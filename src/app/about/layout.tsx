import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Onterra Capital",
  description:
    "Learn about our experienced team of real estate investment professionals who combine decades of expertise with innovative strategies to deliver exceptional returns.",
  keywords: [
    "about us",
    "team",
    "real estate investment",
    "leadership",
    "expertise",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
