import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import FormSection from "@/components/questions/new/FormSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "시그널 작성"
}

export default function QuestionsNewPage() {
  return (
    <HeaderFooterWrapper header headerTitle="시그널 작성">
      <section className="flex h-full w-full flex-col gap-[24px] pt-[36px]">
        <p className="text-center text-[24px] font-semibold">
          오늘은 어떤 시그널을
          <br />
          보내볼까요?
        </p>
        <FormSection />
      </section>
    </HeaderFooterWrapper>
  )
}
