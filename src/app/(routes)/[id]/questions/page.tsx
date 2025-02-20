import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"
import QuestionListTabBox from "@/components/questions/list/QuestionListTabBox"
import QuestionBoxSection from "@/components/questions/list/QuestionBoxSection"

export default function QuestionsPage() {
  return (
    <HeaderFooterWrapper footer>
      <div className="px-[16px]">
        <MenuHeader title="리스트" />
        <QuestionListTabBox />
        <CountAndSortBox type="시그널" count={333} />
        <QuestionBoxSection />
      </div>
    </HeaderFooterWrapper>
  )
}
