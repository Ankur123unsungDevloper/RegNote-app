import { Outfit } from "next/font/google";
import type { Metadata } from 'next';
import './globals.css';

import { siteConfig } from "@/config/site";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { ModalProvider } from "@/components/providers/modal-provider";

const font = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/logo-dark.svg",
        href: "/logos/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ModalProvider />
            {children}
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
};