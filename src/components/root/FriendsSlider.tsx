"use client"
import { useFindChannelMembers } from "@/api/channel-member-controller/channel-member-controller"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import "swiper/css"
import "swiper/css/pagination"
import "@/styles/sliderBullet.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

export default function FriendsSlider() {
  const { id } = useParams()
  const router = useRouter()
  const { data } = useFindChannelMembers(id as string)

  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView
        title=" 이 함께하고 있어요"
        countTitle={` ${data?.body?.memberCount ?? "0"}명`}
        onClick={() => router.push(`/${id}/friends`)}
      />
      <div className="mx-[-16px]">
        <Swiper
          slidesPerView="auto"
          className="w-full"
          //  spaceBetween={8}
          // slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          modules={[Pagination]}
          pagination={{
            el: `#friends-slider`,
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} !bg-black !w-[4px] !h-[4px]"> </span>`
            }
          }}
        >
          {data?.body?.channelMembers?.map((member) => (
            <SwiperSlide
              key={member.channelMemberId}
              className="ms-[8px] !w-fit rounded-[12px] bg-gray-01 first:ms-[16px]"
            >
              <div className="flex w-[104px] max-w-[50vw] flex-col items-center justify-center gap-[8px] p-[20px] text-center">
                <div className="relative h-[48px] w-[48px]">
                  <Image
                    src={member.profileImageUrl ?? "/"}
                    fill
                    alt="profile-image"
                    className="rounded-full object-contain"
                  />
                </div>
                <p className="w-full overflow-hidden text-ellipsis text-nowrap text-caption-01 text-black/60">
                  {member.codeName}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data?.body?.channelMembers && data?.body?.channelMembers?.length > 3 && (
        <section id="friends-slider" className="flex h-[12px] w-full justify-center gap-[4px]" />
      )}
    </article>
  )
}
