"use client"
import LoginButton from "@/components/auth/LoginButton"
import CarouselItems from "@/components/auth/CarouselItems"
import { useSession } from "next-auth/react"

export default function Auth() {
  const { data: session } = useSession()
  console.log("액세스토큰", session?.user?.accessToken)
  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center justify-between gap-[57px] px-[16px]">
        <CarouselItems />
        <LoginButton />
      </section>
    </div>
  )
}
