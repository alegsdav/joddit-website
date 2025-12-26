import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joddit - Capture Your Ideas as They Happen",
  description: "Joddit is the note-taking app that captures your ideas with voice transcription. Organize thoughts, identify speakers, and sync across all devices.",
  authors: [{ name: "Joddit" }],
  openGraph: {
    title: "Joddit - Capture Your Ideas as They Happen",
    description: "The note-taking app with voice transcription. Capture ideas instantly.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Joddit",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

