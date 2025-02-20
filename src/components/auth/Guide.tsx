"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "@/components/auth/Button"

interface GuideProps {
  title: string
  buttonValue?: string
  nextPageUrl?: string
  onNext?: () => void
  nickname?: string
  imageUrl: string
  unoptimized?: boolean
}

function Guide({ title, onNext, nextPageUrl, buttonValue, imageUrl, unoptimized = false }: GuideProps) {
  const router = useRouter()
  const handleButtonClick = () => {
    if (!nextPageUrl && onNext) {
      onNext()
    }
    if (nextPageUrl) {
      router.push(`/initial/${nextPageUrl}`)
    }
  }

  return (
    <div className="flex size-full flex-col items-center justify-between pt-[64px]">
      <div className="flex flex-col items-center gap-[24px]">
        <Image src={imageUrl} width={200} height={200} alt="일러스트 이미지" unoptimized={unoptimized} />
        <div className="whitespace-pre-line text-center text-headline-01">
          {title}
          <br />
        </div>
      </div>
      {buttonValue && (
        <Button variant="default" size="default" onClick={handleButtonClick}>
          {buttonValue}
        </Button>
      )}
    </div>
  )
}

export default Guide
