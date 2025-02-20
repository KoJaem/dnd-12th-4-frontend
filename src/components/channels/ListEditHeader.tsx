"use client"

import { useFindChannelsByRole } from "@/api/channel-controller/channel-controller"
import { ChannelMemberDeleteRequest } from "@/api/model/channelMemberDeleteRequest"
import { useFormContext } from "react-hook-form"

interface Params {
  count: number
}
export default function ListEditHeader({ count }: Params) {
  const { data } = useFindChannelsByRole({ tab: "all" })

  const { setValue } = useFormContext<ChannelMemberDeleteRequest>()

  const selectAll = () => {
    const allIds = data?.body?.channelShowResponse
      ?.map((data) => data.channelId)
      .filter((id): id is string => id !== undefined)
    if (allIds?.length === count) {
      setValue("channelIds", [], { shouldValidate: true })
    } else {
      setValue("channelIds", allIds ?? [], { shouldValidate: true })
    }
  }

  return (
    <section className="flex justify-between py-[12px]">
      <article className="flex items-center gap-[4px] text-body-03">
        <p className="text-emphasis-high">채널</p>
        <p className="text-secondary-300">{count}</p>
      </article>
      <article className="flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={selectAll} type="button">
          <p className="text-body-03 text-emphasis-medium">전체 선택</p>
        </button>
      </article>
    </section>
  )
}
