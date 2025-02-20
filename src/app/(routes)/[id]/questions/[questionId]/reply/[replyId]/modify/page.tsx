import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import FormSection from "@/components/questions/reply/new/FormSection"

export default function ReplyModifyPage() {
  return (
    <HeaderFooterWrapper header headerTitle="응답 수정">
      <section className="flex h-full flex-col items-center px-[16px] pb-[12px] pt-[36px]">
        <FormSection />
      </section>
    </HeaderFooterWrapper>
  )
}
