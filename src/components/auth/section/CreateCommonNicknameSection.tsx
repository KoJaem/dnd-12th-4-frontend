"use client"

import Button from "../Button"
import TitleAndDescriptionBox from "../TitleAndDescriptionBox"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import Character from "../../../../public/character-front.svg"
import { cn } from "@/utils/cn"

interface CreateCommonNicknameSectionProps {
  onNext: () => void
}
export default function CreateCommonNicknameSection({ onNext }: CreateCommonNicknameSectionProps) {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()
  const nickname = watch("nickname")
  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <Image src={Character} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox
            title={`그럼..친구들과 소통할\n코드명을 알려주세요`}
            description={`코드명은 앞으로 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요.`}
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <input
            {...register("nickname")}
            className={cn(
              "placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none",
              !!errors.nickname && "border-error"
            )}
            placeholder="코드명을 작성해주세요."
            autoFocus
          />
          <div className="flex justify-between text-caption-02 text-error">
            {errors.nickname && <p className="">{String(errors.nickname.message)}</p>}
            <p className={cn("absolute right-4", !errors.nickname && "text-black/60")}>{nickname.length}/10</p>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        size="default"
        onNext={onNext}
        disabled={!nickname?.trim().length || !!errors.nickname}
        isSubmit
      >
        다음
      </Button>
    </>
  )
}
