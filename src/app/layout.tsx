import type { Metadata } from "next";
import { Gochi_Hand, Inter, Londrina_Solid } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const londrina = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: "400",
});

const gochi = Gochi_Hand({
  variable: "--font-gochi",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mello - Webflow HTML website template",
  description: "Coffee, matcha & fresh bakes daily",
  icons: {
    icon: [
      {
        url: "/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/seo/favicon-32.png",
        sizes: "32x32",
      },
      {
        url: "/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/seo/favicon-48.png",
        sizes: "48x48",
      },
    ],
    apple:
      "/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/seo/webclip-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${londrina.variable} ${gochi.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
