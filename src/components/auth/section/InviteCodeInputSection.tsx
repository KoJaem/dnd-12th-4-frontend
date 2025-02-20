"use client"

import TitleAndDescriptionBox from "@/components/auth/TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import Character from "../../../../public/character-front.svg"
import { cn } from "@/utils/cn"

interface InviteCodeInputSectionProps {
  onNext: () => void
}

export default function InviteCodeInputSection({ onNext }: InviteCodeInputSectionProps) {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()
  const inviteCode = watch("inviteCode")

  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <div className="size-[60px]">
            <Image src={Character} width={60} height={60} alt="캐릭터 이미지" />
          </div>
          <TitleAndDescriptionBox title={`친구에게 전달받은\n초대 코드를 알려주세요`} />
        </div>
        <div className="flex flex-col gap-[4px]">
          <input
            {...register("inviteCode")}
            className="placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none"
            placeholder="초대 코드를 작성해주세요."
          />
          <div className="flex justify-between text-caption-02 text-error">
            {errors.inviteCode && <p>{String(errors.inviteCode.message)}</p>}
            <p className={cn("absolute right-4", !errors.inviteCode && "text-black/60")}>{inviteCode.length}/10</p>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        size="default"
        onNext={onNext}
        disabled={!inviteCode.trim().length || !!errors.inviteCode}
      >
        다음
      </Button>
    </>
  )
}
