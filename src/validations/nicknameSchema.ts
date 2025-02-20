import { z } from "zod"

export const createCommonNicknameSchema = z.object({
  nickname: z.string().max(10, "최대 10자까지 입력 가능해요.")
})

export type CreateCommonNicknameSchema = z.infer<typeof createCommonNicknameSchema>
