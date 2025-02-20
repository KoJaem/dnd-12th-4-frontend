"use client"

import { useJoinMemberToChannel } from "@/api/channel-member-controller/channel-member-controller"
import Guide from "@/components/auth/Guide"
import Header from "@/components/auth/Header"
import ChannelNicknameSection from "@/components/auth/section/CreateChannelNicknameSection"
import InviteCodeInputSection from "@/components/auth/section/InviteCodeInputSection"
import { inviteCodeSchema } from "@/validations/joinSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"

const steps = ["InvitationCode", "ChannelNickname", "CreatedCode"]

function ChannelJoinPageClient() {
  const { data } = useSession()
  const [stepLevel, setStepLevel] = useState(0)
  const [channelId, setChannelId] = useState("")
  const router = useRouter()
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  const onPrev = () => {
    if (stepLevel > 0) {
      setStepLevel((prev) => prev - 1)
    } else {
      router.back()
    }
  }

  const formMethods = useForm({
    defaultValues: {
      inviteCode: "",
      channelNickname: data?.user.userName || ""
    },
    resolver: zodResolver(inviteCodeSchema),
    mode: "onChange"
  })

  const { watch, handleSubmit } = formMethods
  const inviteCode = watch("inviteCode")
  const channelNickname = watch("channelNickname")

  console.log(inviteCode, channelNickname)
  const joinChannelMutation = useJoinMemberToChannel()

  const onSubmit = async (data: any) => {
    console.log("폼 데이터:", data)
    try {
      const response = await joinChannelMutation.mutateAsync({
        data: { inviteCode: inviteCode, codeName: channelNickname }
      })
      setChannelId(response.body?.channelId as string)
      onNext()
    } catch {
      toast("초대 코드를 다시 한번 확인해 주세요.")
    }
  }

  useEffect(() => {
    if (steps[stepLevel] === "CreatedCode") {
      setTimeout(() => {
        router.push(`/${channelId}`)
      }, 2000)
    }
  }, [stepLevel, router, channelId])

  return (
    <div className="relative h-full px-[16px] pb-[12px] pt-[56px]">
      {steps[stepLevel] !== "CreatedCode" && <Header onPrev={onPrev} />}
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
          {steps[stepLevel] === "InvitationCode" && <InviteCodeInputSection onNext={onNext} />}
          {steps[stepLevel] === "ChannelNickname" && <ChannelNicknameSection type="invite" onNext={onNext} />}
          {steps[stepLevel] === "CreatedCode" && (
            <Guide
              title={`이제 친구들과 소통할 수 있도록\n주파수를 맞춰볼게요!`}
              onNext={onNext}
              imageUrl={"/talki/gif/talki_sending.gif"}
              unoptimized
            />
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default ChannelJoinPageClient
