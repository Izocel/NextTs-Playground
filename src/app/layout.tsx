import type { Metadata } from "next";
import PWAPrompt from "./_components/PWAPrompt";
import ReduxProvider from "./_components/ReduxProvider";
import WebVitals from "./_components/WebVitals";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playground",
  description: "Next.js Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <PWAPrompt />
          <WebVitals />
        </ReduxProvider>
      </body>
    </html>
  );
}
