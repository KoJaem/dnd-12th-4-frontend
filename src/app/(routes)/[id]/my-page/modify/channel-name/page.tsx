import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyChannelNameForm from "@/components/my-page/channel/ModifyChannelNameForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "채널이름 변경"
}

export default function ModifyChannelNamePage() {
  return (
    <HeaderFooterWrapper header headerTitle="채널명">
      <ModifyChannelNameForm />
    </HeaderFooterWrapper>
  )
}
