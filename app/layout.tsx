import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "500"],
  variable: "--font-space_Grotesk",
});

export const metadata: Metadata = {
  title: "Orchestrate | Event manager for your events",
  description: "Event Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`scroll-smooth  ${space_Grotesk.variable}`}>
          <NextTopLoader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
