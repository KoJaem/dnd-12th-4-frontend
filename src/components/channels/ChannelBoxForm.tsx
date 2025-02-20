"use client"
import { ChannelMemberDeleteRequest } from "@/api/model/channelMemberDeleteRequest"
import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import { share, ShareAPIRequest } from "@/utils/share"
import { Check, Share2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFormContext } from "react-hook-form"
interface Params {
  channelId: string
  questionCount: number
  name: string
  memberCount: number
  owner: string
  selected?: boolean
  editMode?: boolean
}
export default function ChannelBoxForm({
  channelId,
  questionCount,
  name,
  memberCount,
  // owner, // Todo 추 후 필요없는게 확실해지면 props 제거
  editMode = false,
  selected = false
}: Params) {
  const { setValue, watch } = useFormContext<ChannelMemberDeleteRequest>()
  const router = useRouter()

  const onClickChannelBox = () => {
    const currentChannelId = watch("channelIds") || []

    if (!selected) {
      setValue("channelIds", [...currentChannelId, channelId], { shouldValidate: true })
    } else {
      const updatedChannelId = currentChannelId.filter((id) => id !== channelId)
      setValue("channelIds", updatedChannelId, { shouldValidate: true })
    }
  }

  const handleShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const shareData: ShareAPIRequest = {
      // Todo 데이터 알맞게 수정
      title: "DND",
      text: "DND-12-4팀",
      url: "https://dnd.ac"
    }
    share(shareData)
  }

  return (
    <section
      className={cn("flex cursor-pointer flex-col gap-[12px] rounded-[24px] bg-gray-01 p-[20px]")}
      onClick={() => {
        if (editMode) {
          onClickChannelBox()
        } else {
          router.push(`/${channelId}`)
        }
      }}
    >
      <article className="flex justify-between">
        <Tag
          text={`${questionCount ?? 0}번째 시그널`}
          className="bg-secondary-0 text-secondary-300"
          count={questionCount}
        />
        {!editMode && (
          <button type="button" onClick={handleShare}>
            <Share2 size={24} />
          </button>
        )}
        {editMode && (
          <div
            className={cn(
              "flex h-[24px] w-[24px] items-center justify-center rounded-full",
              selected ? "bg-gray-08" : "border border-gray-04 bg-transparent"
            )}
          >
            <Check size={16} color={selected ? "white" : "transparent"} />
          </div>
        )}
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
          <span className="text-secondary-300">{memberCount}명</span>과 소통 중이에요.
        </p>
      </article>
    </section>
  )
}
