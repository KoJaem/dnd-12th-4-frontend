"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from "react"

export default function CheckAuth() {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user?.logout) {
      console.log("자동 로그아웃 실행됨")
      signOut({ callbackUrl: "/" })
    }
  }, [session])

  return null
}
