"use client"

import { QueryClient } from "@tanstack/react-query"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

interface ProvidersProps extends PropsWithChildren {
  session?: Session | null
  queryClient?: QueryClient
}

export const AuthProvider = ({ session, children }: ProvidersProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
