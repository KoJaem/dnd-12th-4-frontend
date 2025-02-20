"use client"

import TitleAndDescriptionBox from "../TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import Character from "../../../../public/character-front.svg"
import { cn } from "@/utils/cn"

interface CreateChannelNameSectionProps {
  onNext: () => void
}
export default function CreateChannelNameSection({ onNext }: CreateChannelNameSectionProps) {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()
  const channelName = watch("channelName")
  console.log(errors)
  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <Image src={Character} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox
            title={`친구들과 소통할\n채널명을 만들어보세요`}
            description="채널명은 언제든지 수정이 가능해요."
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <input
            {...register("channelName")}
            className="placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none"
            placeholder="채널명을 작성해 주세요"
            autoFocus
          />
          <div className="flex justify-between text-caption-02 text-error">
            {errors.channelName && <p>{String(errors.channelName.message)}</p>}
            <p className={cn("absolute right-4", !errors.channelName && "text-black/60")}>{channelName.length}/10</p>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        size="default"
        onNext={onNext}
        disabled={!channelName?.trim().length || !!errors.channelName}
      >
        다음
      </Button>
    </>
  )
}
