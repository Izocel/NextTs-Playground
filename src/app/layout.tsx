import type { Metadata } from "next";
import localFont from "next/font/local";
import PWAPrompt from "./_components/PWAPrompt";
import StoreProvider from "./_components/StoreProvider";
import WebVitals from "./_components/WebVitals";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Playground",
  description: "Next.js Typescript playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <WebVitals />
      <PWAPrompt />
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
