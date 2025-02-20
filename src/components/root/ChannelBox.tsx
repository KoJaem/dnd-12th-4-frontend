"use client"
import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { useRouter } from "next/navigation"
interface Params {
  channelId: string
  count: number
  name: string
  memberCount: number
}
export default function ChannelBox({ channelId, count, name, memberCount }: Params) {
  const router = useRouter()

  return (
    <section
      className={cn("flex cursor-pointer flex-col gap-[12px] rounded-[24px] bg-gray-01 p-[20px]")}
      onClick={() => {
        router.push(`/${channelId}`)
      }}
    >
      <article className="flex justify-between">
        <Tag text={`${count}번째 시그널`} className="bg-secondary-0 text-secondary-300" count={count} />
      </article>
      <article>
        <p className="text-subtitle-02 font-semibold text-emphasis-high">{name}</p>
        <p className="text-body-04 text-emphasis-medium">누군가 시그널을 보냈어요</p>
      </article>
      <article className="flex justify-between text-[12px] text-black/60">
        {/* <p>{memberCount}명과 소통 중이에요.</p> */}
        {/* <p>채널장 : {owner}</p> */}
        <div className="flex items-center">
          <Image src={"/clock.png"} alt="clock-icon" width={24} height={24} />
          <p className="text-caption-02 text-emphasis-medium">응답을 기다리는 중..</p>
        </div>
        <p className="text-caption-01 text-emphasis-medium">
          <span className="text-secondary-300">{memberCount}명</span> 참여 중
        </p>
      </article>
    </section>
  )
}
