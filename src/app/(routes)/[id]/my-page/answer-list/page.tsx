import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import AnswerCardList from "@/components/my-page/answer/AnswerCardList"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "응답 목록"
}

export default async function AnswerListPage() {
  return (
    <HeaderFooterWrapper header footer headerTitle="보낸 응답">
      <div className="px-[16px]">
        <CountAndSortBox type="응답" count={333} />
        <AnswerCardList />
      </div>
    </HeaderFooterWrapper>
  )
}
