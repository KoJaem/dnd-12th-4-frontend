"use client"

import { useShowAnswers } from "@/api/answer-controller/answer-controller"
import {
  useFindChannelMembers,
  useFindTodayQuestionerProfile
} from "@/api/channel-member-controller/channel-member-controller"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import { useParams } from "next/navigation"
import { ReactNode } from "react"

// https://www.figma.com/design/kU6cWZCX0dEIFgIGoLaO2J?node-id=301-2555#1134614408

/*
    채널에 참여중인 친구가 나 혼자일때)
    (시그널 작성과 관계없이): 친구를 초대해주세요!

    오늘의 질문자 일때)
    시그널 작성 전: 오늘까지 시그널을 보내주세요!
    시그널 작성 후: 시그널 보내기 성공! 10포인트를 받았어요!

    오늘의 질문자가 아닐때)
    질문자가 아직 시그널을 작성하지 않았을때: 아직 질문자가 시그널을 작성하지 않았어요..
    응답작성 전: 오늘까지 응답을 보내주세요!
    응답작성 후: 응답 보내기 성공!
  */

export default function InformationBox() {
  const { id } = useParams()
  const { data: channelMemberData } = useFindChannelMembers(id as string)

  const { data: todayQuestionerData } = useFindTodayQuestionerProfile(id as string)

  const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  const { data: answerData } = useShowAnswers(questionData?.questionId as number)

  const isExistMyAnswer = answerData?.body?.answerList?.some((answer) => answer.myAnswer === true) ?? false

  if (channelMemberData?.body?.memberCount && channelMemberData?.body?.memberCount <= 1) {
    return (
      <InformationWrapper>
        <p>아직 채널에 아무도 없네요...</p>
      </InformationWrapper>
    )
  }

  if (todayQuestionerData?.body?.isTodayQuestioner) {
    if (!questionData?.isExist)
      return (
        <InformationWrapper>
          <p>
            <span className="text-secondary-300">오늘</span>까지 시그널을 보내주세요!
          </p>
        </InformationWrapper>
      )
    else {
      return (
        <InformationWrapper>
          <p>
            시그널 보내기 성공! <span className="text-secondary-300">10포인트</span>를 받았어요!
          </p>
        </InformationWrapper>
      )
    }
  } else {
    if (!questionData?.isExist) {
      return (
        <InformationWrapper>
          <p>
            아직 질문자가 <span className="text-secondary-300">시그널을 작성하지 않았어요..</span>
          </p>
        </InformationWrapper>
      )
    } else {
      if (!isExistMyAnswer)
        return (
          <InformationWrapper>
            <p>
              <span className="text-secondary-300">오늘</span>까지 응답을 보내주세요!
            </p>
          </InformationWrapper>
        )
      else
        return (
          <InformationWrapper>
            <p>응답 보내기 성공!</p>
          </InformationWrapper>
        )
    }
  }
}

const InformationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex items-center justify-center pb-[24px]">
      <article className="rounded-[40px] bg-gray-01 px-[16px] py-[8px] font-pixel text-pixel-caption text-emphasis-medium">
        {children}
      </article>
    </section>
  )
}
