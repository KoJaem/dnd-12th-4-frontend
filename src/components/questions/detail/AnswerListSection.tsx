import Image from "next/image"
import QuestionOrAnswerDetailBox from "@/components/questions/detail/QuestionOrAnswerDetailBox"
import { cn } from "@/utils/cn"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"

export default function AnswerListSection() {
  const answerCount = 2
  const hasAnswers = answerCount > 0
  return (
    <section className={cn("flex flex-col", answerCount < 1 ? "gap-[60px]" : "gap-[12px]")}>
      <CountAndSortBox type="응답" count={2} className="text-subtitle-01" />
      {!hasAnswers && (
        <div className="flex flex-col items-center justify-center gap-[12px]">
          <Image src={"https://placehold.co/230x230.png"} width={60} height={60} alt="아이콘" />
          <p className="text-black/60">아직 아무도 응답하지 않았어요</p>
        </div>
      )}
      {hasAnswers && (
        <>
          <QuestionOrAnswerDetailBox
            type="answer"
            imageSrc="https://placehold.co/230x230.png"
            content="답장입니다"
            nickname="닉네임2"
            time={5}
            isMyAnswer
          />
          <QuestionOrAnswerDetailBox
            type="answer"
            imageSrc="https://placehold.co/230x230.png"
            content="답장입니다"
            nickname="닉네임2"
            time={5}
            isMyAnswer
          />
        </>
      )}
    </section>
  )
}
