import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SS International | Precision Rubber Sealing Solutions",
  description:
    "25 years of high-performance EPDM & NBR rubber profiles engineered for automotive, railways, architecture, and 8+ critical industries. Manufactured in India to global standards.",
  keywords:
    "rubber profiles, EPDM, NBR, sealing solutions, automotive seals, railway profiles, architectural rubber, UHF curing, SS International",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
