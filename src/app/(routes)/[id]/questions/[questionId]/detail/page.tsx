import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import QuestionDetailSection from "@/components/questions/detail/QuestionDetailSection"
import AnswerListSection from "@/components/questions/detail/AnswerListSection"

export default function QuestionDetailPage() {
  //  questionId 받아오면 API 호출
  return (
    <HeaderFooterWrapper header headerTitle="시그널">
      <div className="flex flex-col gap-[24px] px-[16px] py-[12px]">
        <div className="flex flex-col gap-[12px]">
          <div className="text-subtitle-01">
            <span className="text-secondary-300">{1}번째 </span>
            <span className="text-emphasis-high">시그널</span>
          </div>
          <QuestionDetailSection />
        </div>
        <AnswerListSection />
      </div>
    </HeaderFooterWrapper>
  )
}
