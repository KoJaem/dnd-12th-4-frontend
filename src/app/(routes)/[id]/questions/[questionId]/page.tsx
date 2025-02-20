import { getFindQuestionsByQuestionIdQueryKey } from "@/api/question-controller/question-controller"
import { serverInstance } from "@/api/serverInstance"
import QuestionCheckPageClient from "@/components/questions/check/QuestionCheckPageClient"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

type Params = Promise<{ id: string; questionId: number }>

export default async function QuestionCheckPage({ params }: { params: Params }) {
  const { id, questionId } = await params
  const queryClient = new QueryClient()

  try {
    await queryClient.fetchQuery({
      queryKey: getFindQuestionsByQuestionIdQueryKey(id, questionId),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/channels/${id}/questions/${questionId}`)
        return data
      }
    })
  } catch {
    notFound()
  }

  return (
    <section className="flex h-full flex-col items-center gap-[24px] px-[16px] pb-[12px] pt-[80px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QuestionCheckPageClient />
      </HydrationBoundary>
    </section>
  )
}
