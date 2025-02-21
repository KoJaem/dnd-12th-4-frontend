import { Toaster } from "@/components/common/sonner"
import MobileViewLayout from "@/components/layout/MobileViewLayout"
import { Pixel, Pretendard } from "@/fonts"
import { AuthProvider } from "@/providers/AuthProvider"
import ReactQueryProvider from "@/providers/ReactQueryProvider"
import { cn } from "@/utils/cn"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import "../styles/globals.css"
import "../styles/reset.css"
import { authOptions } from "./api/auth/[...nextauth]/auth"

const APP_NAME = "피키토키"

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `${APP_NAME} | %s`
  },
  description: "친구들과 우리만의 채널을 공유하고 소통해보세요!",
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/app-icons/picki_talki_app_icon_small.png", sizes: "192x192" }]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    siteName: APP_NAME,
    title: APP_NAME,
    type: "website",
    description: "친구들과 우리만의 채널을 공유하고 소통해보세요!",
    images: [
      {
        url: "/logo/picki_talki_logo_on_white.png",
        alt: "Picki-Talki OG Image"
      }
    ],
    url: "https://picki-talki.site"
  },
  metadataBase: new URL("https://picki-talki.site"),
  manifest: "/manifest.json"
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={cn(Pretendard.variable, Pixel.variable)}>
        <ReactQueryProvider>
          <AuthProvider session={session}>
            <Toaster />
            <div id="modal" />
            <MobileViewLayout>{children}</MobileViewLayout>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
