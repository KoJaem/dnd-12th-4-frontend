"use client"

import { QuestionCreateRequest } from "@/api/model/questionCreateRequest"
import { useCreateQuestion } from "@/api/question-controller/question-controller"
import Button from "@/components/common/Button"
import Textarea from "@/components/common/Textarea"
import Toggle from "@/components/common/Toggle"
import RecommendQuestionBottomSheet from "@/components/questions/new/RecommendQuestionBottomSheet"
import "@/styles/bottomSheet.css"
import { questionSchema } from "@/validations/questionSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function FormSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { id } = useParams()
  const { mutateAsync } = useCreateQuestion()
  const router = useRouter()

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting }
  } = useForm<QuestionCreateRequest>({
    defaultValues: {
      content: "",
      isAnonymous: false
    },
    resolver: zodResolver(questionSchema)
  })

  const onSubmit = async (data: QuestionCreateRequest) => {
    try {
      const isAnonymous = data.isAnonymous
      if (isAnonymous) {
        await mutateAsync({ channelId: id as string, data: { ...data, anonymousName: "익명" } })
      } else {
        await mutateAsync({ channelId: id as string, data })
      }
      router.replace(`/${id}/questions`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className="h-full w-full px-[16px] pb-[16px]">
        <form className="flex h-full flex-col gap-[12px]" onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            count={2}
            date={new Date()}
            maxLength={100}
            value={watch("content")}
            onChange={(e) => setValue("content", e.target.value, { shouldValidate: true })}
          />
          <section className="flex justify-between">
            <button
              className="flex items-center gap-[4px] rounded-xsm bg-gray-03 px-[16px] py-[8px]"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              {/* <p className="text-[14px] text-black/60">추천 시그널</p>
              <Info size={16} /> */}
              <p className="text-caption-01 text-emphasis-high">추천 시그널</p>
            </button>
            <article className="flex items-center gap-[8px]">
              <Toggle
                label="익명으로 보내기"
                checked={watch("isAnonymous")}
                onChange={(e) => setValue("isAnonymous", e.target.checked)}
              />
            </article>
          </section>
          <div className="flex h-full items-end justify-center">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              보내기
            </Button>
          </div>
        </form>
      </section>
      <RecommendQuestionBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
