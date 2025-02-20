import { z } from "zod"

export const modifyProfileSchema = z.object({
  nickname: z.string().min(1, "닉네임을 입력해주세요.").max(10, "최대 10자까지 입력 가능해요."),
  profileImage: z.string().url("올바른 이미지 URL을 입력해주세요.").optional()
})

export type ModifyProfileType = z.infer<typeof modifyProfileSchema>
