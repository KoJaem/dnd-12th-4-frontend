import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import QuestionDetailSection from "@/components/questions/detail/QuestionDetailSection"
import AnswerListSection from "@/components/questions/detail/AnswerListSection"

export default function QuestionDetailPage() {
  return (
    <HeaderFooterWrapper header headerTitle="시그널">
      <main className="flex flex-col gap-[12px] px-[16px] py-[12px]">
        <QuestionDetailSection />
        <AnswerListSection />
      </main>
    </HeaderFooterWrapper>
  )
}
