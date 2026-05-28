import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://geeked.com"),
  title: "GEEKED — Luxury Streetwear | Rustic Soul. Modern Chaos.",
  description:
    "Built for the misfits. Luxury in rebellion. Where rustic soul meets modern chaos. Enter the world of Geeked.",
  openGraph: {
    title: "GEEKED — Luxury Streetwear",
    description: "Built for the misfits. Luxury in rebellion.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LoadingScreen />
        <GrainOverlay />
        <CursorFollower />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
