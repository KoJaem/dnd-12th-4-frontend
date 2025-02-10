"use client"

import Guide from "@/components/auth/Guide"
import ChannelNicknameSection from "@/components/auth/section/ChannelNicknameSection"
import CreateChannelNameSection from "@/components/auth/section/CreateChannelNameSection"
import CreatedCodeSection from "@/components/auth/section/CreatedCodeSection"

import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

const steps = ["CreateChannelName", "ChannelNickname", "CreatedCode", "LaterInvitation"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  const formMethods = useForm({
    defaultValues: {
      channelName: "",
      channelNickname: ""
    }
  })

  const { watch, handleSubmit } = formMethods
  const channelName = watch("channelName")
  const channelNickname = watch("channelNickname")

  console.log(channelName, channelNickname)
  const onSubmit = (data: any) => {
    console.log("폼 데이터:", data)
    //api 요청 및 응답 성공하면 onNext 실행(API 연동 시 구현 예정)
    onNext()
  }
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
        {steps[stepLevel] === "CreateChannelName" && <CreateChannelNameSection onNext={onNext} />}
        {steps[stepLevel] === "ChannelNickname" && <ChannelNicknameSection type="create" onNext={onNext} />}
        {steps[stepLevel] === "CreatedCode" && <CreatedCodeSection onNext={onNext} />}
        {steps[stepLevel] === "LaterInvitation" && <Guide title={`그럼 채널로\n보내드릴게요!`} />}
      </form>{" "}
    </FormProvider>
  )
}

export default Page
