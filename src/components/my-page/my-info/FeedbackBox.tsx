import Image from "next/image"
import Link from "next/link"

export default function FeedbackBox() {
  return (
    <article>
      <Link href="#" className="flex gap-[12px] rounded-lg bg-gray-01 p-[20px]">
        <Image src="https://placehold.co/229x229.png" width={44} height={44} alt="피드백 아이콘" />
        <div className="flex flex-col gap-[4px]">
          <div className="text-black/87 text-subtitle-03">의견 남기러 가기</div>
          <div className="text-body-04 text-black/60">서비스 이용 시 어려움은 없으셨나요? </div>
        </div>
      </Link>
    </article>
  )
}
