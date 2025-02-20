import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import FormSection from "@/components/questions/reply/modify/FormSection"

export default function ReplyModifyPage() {
  return (
    <HeaderFooterWrapper header headerTitle="응답 수정">
      <main className="flex h-full flex-col items-center px-[16px] pb-[12px] pt-[36px]">
        <FormSection />
      </main>
    </HeaderFooterWrapper>
  )
}
