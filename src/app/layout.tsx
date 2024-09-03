import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STRKFarm | Top Yield Aggregator on Starknet",
  description: "Discover top yield-earning pools and strategies on Starknet. Maximize your crypto earnings with Starknet's DeFi Spring, leveraging cutting-edge decentralized finance opportunities. Start growing your investments today and experience optimized returns this year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#7859F3" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
