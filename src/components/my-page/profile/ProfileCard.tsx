"use client"
import { useFindMemberInfo } from "@/api/member-controller/member-controller"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import character from "../../../../public/character-front.svg"
export default function ProfileCard() {
  const { id } = useParams()
  const { data } = useFindMemberInfo()
  console.log("my", data)
  return (
    <Link
      href={`/${id}/my-page/modify/common-profile`}
      className="flex h-[112px] items-center gap-[12px] rounded-[20px] bg-primary-200/15 p-[20px]"
    >
      <div className="relative h-[48px] w-[48px]">
        <Image
          src={data?.body?.profileImage || character}
          fill
          alt="프로필 이미지"
          className="rounded-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-caption-01 opacity-60">공용 프로필</div>
        <div className="text-subtitle-02 opacity-[0.87]">{data?.body?.name}</div>
        <div className="text-body-04 opacity-60">{data?.body?.email}</div>
      </div>
    </Link>
  )
}
