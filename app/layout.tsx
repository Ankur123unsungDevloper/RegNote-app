import { Toaster } from "sonner";
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RegNote',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon_light.ico",
        href: "/favicon_light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon_dark.ico",
        href: "/favicon_dark.ico",
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
      <body className={inter.className}>
        <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="RegNote-theme-2"
            >
            <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
