"use client"

import QuestionOrAnswerDetailBox from "@/components/questions/detail/QuestionOrAnswerDetailBox"
import MyAnswerStatusBox from "@/components/questions/detail/MyAnswerStatusBox"

export default function QuestionDetailSection() {
  const isMyAnswer = false
  return (
    <section className="flex flex-col gap-[12px]">
      <QuestionOrAnswerDetailBox
        type="question"
        imageSrc="https://placehold.co/230x230.png"
        content="가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드
              텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가"
        nickname="닉네임"
        time={3}
      />
      <MyAnswerStatusBox
        // @hyunjun9788
        // Todo 시그널을 보내셨네요 최고에요! 문구 추가 필요 / 해당 문구인 경우 talki_jjang.webp 적용
        title={isMyAnswer ? "응답을 보내셨네요. 정말 멋져요!" : "질문자가 응답을 기다리고 있어요!"}
        src={isMyAnswer ? "/talki/webp/talki_jjang.webp" : "/talki/webp/talki_front.webp"}
      />
    </section>
  )
}
