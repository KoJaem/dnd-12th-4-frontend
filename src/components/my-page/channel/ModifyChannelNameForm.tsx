"use client"
import {
  getFindChannelByIdQueryKey,
  useFindChannelById,
  useUpdateChannelName
} from "@/api/channel-controller/channel-controller"
import Button from "@/components/auth/Button"
import { cn } from "@/utils/cn"
import { modifyChannelNameSchema } from "@/validations/channelNameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
// import { QueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "sonner"

export default function ModifyChannelNameForm() {
  const params = useParams()
  const router = useRouter()
  const { data: channelInfo } = useFindChannelById(params.id as string)
  const {
    register,
    handleSubmit,
    // setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      channelName: channelInfo?.body?.channelRoomName
    },
    resolver: zodResolver(modifyChannelNameSchema),
    mode: "onChange"
  })

  const channelName = watch("channelName")
  const { mutateAsync } = useUpdateChannelName()
  const queryClient = useQueryClient()

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)

    try {
      await mutateAsync({
        channelId: channelInfo?.body?.channelId as string,
        params: { channelName: channelName as string }
      })
      await queryClient.invalidateQueries({ queryKey: getFindChannelByIdQueryKey(params.id as string) })
      toast("채널명 수정이 완료되었습니다.")
      router.back()
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col justify-between px-[16px] pb-[12px] pt-[40px]"
    >
      <div className="flex flex-col gap-[4px]">
        <input
          {...register("channelName")}
          className={cn(
            "placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none",
            !!errors.channelName && "border-error focus:border-error"
          )}
          placeholder="코드명을 작성해주세요."
          autoFocus
        />
        <div className="flex justify-between text-caption-02 text-error">
          {errors.channelName && <p className="">{String(errors.channelName.message)}</p>}
          <p className={cn("absolute right-4", !errors.channelName && "text-black/60")}>{channelName?.length}/10</p>
        </div>
      </div>
      {channelName !== channelInfo?.body?.channelRoomName && (
        <Button variant="default" size="default" isSubmit>
          수정 완료
        </Button>
      )}
    </form>
  )
}
