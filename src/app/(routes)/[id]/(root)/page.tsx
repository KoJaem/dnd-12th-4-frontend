import { getShowAnswersQueryKey } from "@/api/answer-controller/answer-controller"
import { getFindChannelByIdQueryKey, getFindChannelStatusQueryKey } from "@/api/channel-controller/channel-controller"
import {
  getFindChannelMembersQueryKey,
  getFindTodayQuestionerProfileQueryKey
} from "@/api/channel-member-controller/channel-member-controller"
import { getFindTodayQuestionByChannelQueryKey } from "@/api/question-controller/question-controller"
import { serverInstance } from "@/api/serverInstance"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CharacterInformation from "@/components/root/CharacterInformation"
import FriendsSlider from "@/components/root/FriendsSlider"
import InformationBox from "@/components/root/InformationBox"
import InviteButton from "@/components/root/InviteButton"
import MissionBox from "@/components/root/MissionBox"
import TitleSection from "@/components/root/TitleSection"
import TodayAnswer from "@/components/root/TodayAnswer"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

type Params = Promise<{ id: string }>

export default async function RootPage({ params }: { params: Params }) {
  const { id } = await params

  const queryClient = new QueryClient()

  try {
    const fetchQuestionAndAnswer = async (id: string) => {
      const questionData = await queryClient.fetchQuery({
        queryKey: getFindTodayQuestionByChannelQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}/questions/today`)
          return data
        }
      })

      const questionId = questionData?.questionId
      if (!questionId) return

      await queryClient.prefetchQuery({
        queryKey: getShowAnswersQueryKey(Number(questionId)),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/answer/${questionId}`)
          return data
        }
      })
    }

    // * prefetch 는 오류를 발생시키지 않으므로 유효한 id값인지 확인하기 위해 fetchQuery 사용
    await Promise.all([
      queryClient.fetchQuery({
        queryKey: getFindChannelByIdQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}`)
          return data
        }
      }),
      queryClient.fetchQuery({
        queryKey: getFindChannelMembersQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}/members`)
          return data
        }
      }),
      queryClient.fetchQuery({
        queryKey: getFindTodayQuestionerProfileQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}/members/today-questioner`)
          return data
        }
      }),
      queryClient.fetchQuery({
        queryKey: getFindChannelStatusQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}/status`)
          return data
        }
      }),
      fetchQuestionAndAnswer(id)
    ])
  } catch {
    notFound()
  }

  return (
    <HeaderFooterWrapper footer>
      <section className="flex h-full flex-col bg-[#292D30]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TitleSection />
          <CharacterInformation />
          <InformationBox />
          <section className="flex h-full flex-col gap-[40px] rounded-t-[20px] bg-background p-[16px]">
            <MissionBox />
            <TodayAnswer />
            <InviteButton />
            <FriendsSlider />
          </section>
        </HydrationBoundary>
      </section>
    </HeaderFooterWrapper>
  )
}
