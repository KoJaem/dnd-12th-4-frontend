import type { Metadata } from "next"
import "../styles/globals.css"
import "../styles/reset.css"
import MobileViewLayout from "@/components/layout/MobileViewLayout"
import { Pixel, Pretendard } from "@/fonts"
import { authOptions } from "./api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import { AuthProvider } from "@/providers/AuthProvider"
import ReactQueryProvider from "@/providers/ReactQueryProvider"
import { Toaster } from "@/components/common/sonner"
import { cn } from "@/utils/cn"

export const metadata: Metadata = {
  title: {
    default: "피키토키",
    template: "피키토키 | %s"
  },
  description: "친구들과 우리만의 채널을 공유하고 소통해보세요!",
  openGraph: {
    siteName: "피키토키",
    title: "피키토키",
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
  metadataBase: new URL("https://picki-talki.site")
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
