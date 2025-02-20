import { z } from "zod"

export const modifyChannelNameSchema = z.object({
  channelName: z.string().max(10, "최대 10자까지 입력 가능해요.")
})

export type ModifyProfileType = z.infer<typeof modifyChannelNameSchema>
