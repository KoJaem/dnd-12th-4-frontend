import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import QuestionListTabBox from "@/components/questions/list/QuestionListTabBox"
import QuestionBoxSection from "@/components/questions/list/QuestionBoxSection"

export default function QuestionsPage() {
  return (
    <HeaderFooterWrapper footer>
      <main className="px-[16px]">
        <MenuHeader title="리스트" />
        <QuestionListTabBox />
        <QuestionBoxSection />
      </main>
    </HeaderFooterWrapper>
  )
}
