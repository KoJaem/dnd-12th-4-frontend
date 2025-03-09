"use client"
import { useWriteAnswer } from "@/api/answer-controller/answer-controller"
import { AnswerRequest } from "@/api/model/answerRequest"
import Button from "@/components/common/Button"
import Textarea from "@/components/common/Textarea"
import Toggle from "@/components/common/Toggle"
import { replySchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function FormSection() {
  const { id, questionId } = useParams()
  const router = useRouter()
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting }
  } = useForm<AnswerRequest>({
    defaultValues: {
      answerForm: "",
      isAnonymous: false
    },
    resolver: zodResolver(replySchema)
  })

  const { mutateAsync } = useWriteAnswer()

  const onSubmit = async (data: AnswerRequest) => {
    try {
      const isAnonymous = data.isAnonymous
      if (isAnonymous) {
        await mutateAsync({ questionId: Number(questionId), data: { ...data, anonymousName: "익명" } })
      } else {
        await mutateAsync({ questionId: Number(questionId), data })
      }
      toast("응답을 보냈어요!")
      router.replace(`/${id}/questions/${questionId}/detail`)
    } catch (err) {
      toast("오류가 발생했습니다!")
      console.log(err)
    }
  }

  return (
    <form className="mt-[12px] flex h-full w-full flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Textarea
          maxLength={500}
          value={watch("answerForm")}
          placeholder="응답을 작성해주세요."
          onChange={(e) => setValue("answerForm", e.target.value, { shouldValidate: true })}
        />
        <div className="mt-[16px] flex justify-end">
          <Toggle
            label="익명으로 보내기"
            checked={watch("isAnonymous")}
            onChange={(e) => setValue("isAnonymous", e.target.checked)}
          />
        </div>
      </section>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        보내기
      </Button>
    </form>
  )
}
