import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ellisslaternightshift.com"),
  title: "Ellis Slater & The Night Shift",
  description:
    "The official site for Ellis Slater & The Night Shift. New album released Friday 18 September 2026.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
