import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import MyPageClient from "@/components/my-page/MyPageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "내 정보"
}

function MyPage() {
  return (
    <HeaderFooterWrapper footer>
      <MyPageClient />
    </HeaderFooterWrapper>
  )
}

export default MyPage
