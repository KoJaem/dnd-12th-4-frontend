import { getFindQuestionsByQuestionIdQueryKey } from "@/api/question-controller/question-controller"
import { serverInstance } from "@/api/serverInstance"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ReplyPageClient from "@/components/questions/reply/new/ReplyPageClient"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "응답작성"
}

type Params = Promise<{ id: string; questionId: number }>

export default async function ReplyPage({ params }: { params: Params }) {
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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeaderFooterWrapper header headerTitle="응답 작성">
        <ReplyPageClient />
      </HeaderFooterWrapper>
    </HydrationBoundary>
  )
}

// import QuestionBox from "@/components/common/QuestionBox"
// import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
// import FormSection from "@/components/questions/reply/new/FormSection"

// export default function ReplyPage() {
//   return (
//     <HeaderFooterWrapper header headerTitle="응답 작성">
//       <section className="flex h-full flex-col items-center px-[16px] pb-[12px]">
//         <QuestionBox
//           count={1}
//           replyCount={1}
//           date={new Date()}
//           nickname="닉네임"
//           text="이번 주에 가장 기뻤던 일이 뭐야? 가장 기뻤던 일이 뭐야? 일이 이번 주에 가장 기뻤던 일이"
//         />
//         <FormSection />
//       </section>
//     </HeaderFooterWrapper>
//   )
// }
