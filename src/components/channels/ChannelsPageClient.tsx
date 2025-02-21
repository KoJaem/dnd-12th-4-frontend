"use client"
import { useFindChannelsByRole } from "@/api/channel-controller/channel-controller"
import { useLeaveChannels } from "@/api/channel-member-controller/channel-member-controller"
import { ChannelMemberDeleteRequest } from "@/api/model/channelMemberDeleteRequest"
import ChannelBottomSheet from "@/components/channels/ChannelBottomSheet"
import ChannelBoxForm from "@/components/channels/ChannelBoxForm"
import ListHeader from "@/components/channels/ListHeader"
import Button from "@/components/common/Button"
import MenuHeader from "@/components/common/MenuHeader"
import Tab from "@/components/common/Tab"
import { TAB_MENUS } from "@/constants/tab"
import { cn } from "@/utils/cn"
import { deleteChannelSchema } from "@/validations/channelSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import ConfirmModal from "@/components/common/ConfirmModal"

const ListEditHeader = dynamic(() => import("@/components/channels/ListEditHeader"))
const ChannelEditHeader = dynamic(() => import("@/components/channels/ChannelEditHeader"))

interface Params {
  isFooter?: boolean
}
export default function ChannelsPageClient({ isFooter = false }: Params) {
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || undefined
  const sort = searchParams.get("sort") || undefined

  const [isDeleteModal, setIsDeleteModal] = useState(false)

  const { data, refetch } = useFindChannelsByRole({ tab, sort })

  const { mutateAsync } = useLeaveChannels()

  const formMethods = useForm<ChannelMemberDeleteRequest>({
    defaultValues: {
      channelIds: []
    },
    resolver: zodResolver(deleteChannelSchema)
  })

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit = async (data: FieldValues) => {
    try {
      await mutateAsync({ data })
      formMethods.reset()
      await refetch()
      setIsDeleteModal(false)
      setEditMode(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form className={cn("relative", editMode && "pb-[96px]")} onSubmit={handleSubmit(onSubmit)}>
        {editMode && <ChannelEditHeader onBackClick={() => setEditMode(false)} />}
        <section className={cn("flex flex-col px-[16px]", editMode && "pt-[56px]")}>
          {!editMode && (
            <MenuHeader button title="채널" buttonTitle="추가" onClick={() => setIsOpenChannelSheet(true)} />
          )}
          <ul className="flex gap-[8px]">
            {TAB_MENUS.CHANNEL.map((TAB_MENU) => (
              <Tab
                key={TAB_MENU.value}
                label={TAB_MENU.label}
                isActive={tab === TAB_MENU.value || (TAB_MENU.value === "all" && tab === undefined)}
                onClick={() => router.push(`?tab=${TAB_MENU.value}`)}
              />
            ))}
          </ul>
          {editMode && <ListEditHeader count={watch("channelIds") ? watch("channelIds")!.length : 0} />}
          {!editMode && <ListHeader count={data?.body?.channelShowResponse?.length ?? 0} setEditMode={setEditMode} />}

          <section className="flex flex-col gap-[20px]">
            {data?.body?.channelShowResponse?.map((data) => (
              <ChannelBoxForm
                key={data.channelId}
                channelId={data.channelId as string}
                channelRoomName={data.channelRoomName ?? ""}
                inviteCode={data.inviteCode ?? ""}
                questionCount={data.signalCount || 0}
                name={data.channelRoomName ?? "-"}
                memberCount={data?.countPerson || 1}
                owner={data.channelOwnerName ?? "-"}
                selected={watch("channelIds") ? watch("channelIds")!.includes(data.channelId as string) : false}
                editMode={editMode}
              />
            ))}
          </section>
        </section>
        <ChannelBottomSheet isOpen={isOpenChannelSheet} setIsOpen={setIsOpenChannelSheet} />
        {editMode && (
          <section
            className={cn(
              "fixed flex h-[96px] w-full max-w-screen-lg items-center justify-center bg-white p-[20px]",
              isFooter ? "bottom-[92px]" : "bottom-0"
            )}
          >
            <Button type="button" onClick={() => setIsDeleteModal(true)} className="w-full" disabled={isSubmitting}>
              삭제하기
            </Button>
          </section>
        )}
        {isDeleteModal && (
          <ConfirmModal
            title="삭제 하시겠습니까?"
            onCancel={() => setIsDeleteModal((prev) => !prev)}
            onClick={handleSubmit(onSubmit)}
          />
        )}
      </form>
    </FormProvider>
  )
}
