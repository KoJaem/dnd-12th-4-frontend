import { z } from "zod"

export const deleteChannelSchema = z.object({
  channelIds: z.array(z.string()).min(1, { message: "At least one questionId is required" })
})

export const createChannelSchema = z.object({
  channelName: z.string().min(1, "입력이 필요합니다.").max(10, "최대 10자까지 입력 가능해요."),
  channelNickname: z.string().min(1, "입력이 필요합니다.").max(10, "최대 10자까지 입력 가능해요.")
})

export type DeleteChannelType = z.output<typeof deleteChannelSchema>
export type CreateChannelType = z.infer<typeof createChannelSchema>
