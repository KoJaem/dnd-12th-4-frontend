"use client"

import Guide from "@/components/auth/Guide"
import Header from "@/components/auth/Header"
import CreateChannelNameSection from "@/components/auth/section/CreateChannelNameSection"
import CreatedCodeSection from "@/components/auth/section/CreatedCodeSection"
import { createChannelSchema } from "@/validations/channelSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import CreateChannelNicknameSection from "@/components/auth/section/CreateChannelNicknameSection"
import { useMakeChannel } from "@/api/channel-controller/channel-controller"
import { toast } from "sonner"

const steps = ["CreateChannelName", "ChannelNickname", "CreatedCode", "LaterInvitation"]

function ChannelCreatePageClient() {
  const router = useRouter()
  const [stepLevel, setStepLevel] = useState(0)
  const [channelData, setChannelData] = useState({
    channelId: "",
    inviteCode: "",
    channelName: ""
  })

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
      channelName: "",
      channelNickname: ""
    },
    resolver: zodResolver(createChannelSchema),
    mode: "onChange"
  })

  const { watch, handleSubmit } = formMethods
  const channelName = watch("channelName")
  const channelNickname = watch("channelNickname")

  console.log(channelName, channelNickname)

  const createChannelMutation = useMakeChannel()
  const onSubmit = async (data: any) => {
    console.log("폼 데이터:", data)

    try {
      const response = await createChannelMutation.mutateAsync({
        data: { channelName: channelName, codeName: channelNickname }
      })
      console.log(response)
      setChannelData({
        channelId: response.channelId as string,
        inviteCode: response.inviteCode as string,
        channelName: response.channelName as string
      })
      onNext()
    } catch {
      toast("오류가 발생했습니다!")
      console.error("에러 발생")
    }
  }

  useEffect(() => {
    if (steps[stepLevel] === "LaterInvitation") {
      setTimeout(() => {
        router.push(`/${channelData.channelId}`)
      }, 2000)
    }
  }, [stepLevel, router, channelData.channelId])

  return (
    <div className="relative h-full px-[16px] pb-[12px] pt-[56px]">
      {steps[stepLevel] !== "LaterInvitation" && <Header onPrev={onPrev} />}
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
          {steps[stepLevel] === "CreateChannelName" && <CreateChannelNameSection onNext={onNext} />}
          {steps[stepLevel] === "ChannelNickname" && <CreateChannelNicknameSection type="create" onNext={onNext} />}
          {steps[stepLevel] === "CreatedCode" && <CreatedCodeSection onNext={onNext} channelData={channelData} />}
          {steps[stepLevel] === "LaterInvitation" && (
            <Guide title={`그럼 채널로\n보내드릴게요!`} imageUrl={"/talki/gif/talki_sending.gif"} unoptimized />
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default ChannelCreatePageClient
