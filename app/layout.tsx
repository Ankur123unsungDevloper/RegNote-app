import { Toaster } from "sonner";
import { Outfit } from "next/font/google";
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import './globals.css'
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const font = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'RegNote',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/logoipsum-222.svg",
        href: "/logos/logoipsum-222.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/logoipsum-231.svg",
        href: "/logos/logoipsum-231.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="RegNote-theme-2"
            >
            <Toaster position="bottom-center" />
            <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
