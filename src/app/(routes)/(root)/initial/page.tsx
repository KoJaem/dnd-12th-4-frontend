import AuthInitialPageClient from "@/components/auth/initial/AuthInitialPageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "튜토리얼"
}

function AuthInitialPage() {
  return <AuthInitialPageClient />
}

export default AuthInitialPage
