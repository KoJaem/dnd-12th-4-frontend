import CommonNicknamePageClient from "@/components/auth/connon-nickname/CommonNicknamePageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "공용 닉네임 설정"
}

export default function CommonNicknamePage() {
  return <CommonNicknamePageClient />
}
