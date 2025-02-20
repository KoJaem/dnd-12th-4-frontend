import { z } from "zod"

export const inviteCodeSchema = z.object({
  inviteCode: z.string().max(10, "최대 10자까지 입력 가능해요."),
  channelNickname: z.string().max(10, "최대 10자까지 입력 가능해요.")
})
export type InviteCodeType = z.infer<typeof inviteCodeSchema>
