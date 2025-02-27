"use client"

import CheckAuth from "@/components/auth/CheckAuth"
import { QueryClient } from "@tanstack/react-query"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

interface ProvidersProps extends PropsWithChildren {
  session?: Session | null
  queryClient?: QueryClient
}

export const AuthProvider = ({ session, children }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <CheckAuth />
      {children}
    </SessionProvider>
  )
}
