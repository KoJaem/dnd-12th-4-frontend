"use client"
import { useUpdateAnswer } from "@/api/answer-controller/answer-controller"
import Button from "@/components/common/Button"
import Textarea from "@/components/common/Textarea"
import Toggle from "@/components/common/Toggle"
import useAnswerStore from "@/stores/useAnswerStore"
import { replySchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function FormSection() {
  const router = useRouter()
  const params = useParams()
  const answerId = Number(params.replyId)
  const { answer } = useAnswerStore()

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      question: answer as string,
      isAnonymous: false
    },
    resolver: zodResolver(replySchema)
  })
  const question = watch("question")

  const { mutateAsync } = useUpdateAnswer()
  const onSubmit = async () => {
    try {
      await mutateAsync({ answerId, data: { content: question } })
      toast("응답을 수정했어요!")
      router.back()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="mt-[12px] flex h-full w-full flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Textarea
          maxLength={500}
          value={watch("question")}
          onChange={(e) => setValue("question", e.target.value, { shouldValidate: true })}
        />
        <div className="mt-[16px] flex justify-end">
          <Toggle
            label="익명으로 보내기"
            checked={watch("isAnonymous")}
            onChange={(e) => setValue("isAnonymous", e.target.checked)}
          />
        </div>
      </section>
      <Button type="submit" className="w-full">
        수정 완료
      </Button>
    </form>
  )
}
