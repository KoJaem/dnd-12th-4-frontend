"use client"
import {
  useFindChannelMembers,
  useFindTodayQuestionerProfile
} from "@/api/channel-member-controller/channel-member-controller"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import SignalMission from "@/components/root/SignalMission"
import TodayAnswerSummary from "@/components/root/TodayAnswerSummary"
import { useParams } from "next/navigation"
import InviteMission from "@/components/root/InviteMission"

export default function MissionBox() {
  const { id } = useParams()
  const { data: channelData } = useFindTodayQuestionerProfile(id as string)

  const { data: friendData } = useFindChannelMembers(id as string)

  const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  if (friendData?.body?.memberCount && friendData?.body?.memberCount <= 1) {
    return <InviteMission />
  }

  if (channelData?.body?.isTodayQuestioner) {
    if (questionData?.isExist) return null
    else return <SignalMission />
  } else {
    if (!questionData?.isExist) return null
    return <TodayAnswerSummary />
  }
}
