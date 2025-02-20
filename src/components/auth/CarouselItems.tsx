"use client"
import "@/styles/sliderBullet.css"
import Image from "next/image"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { EffectFade, Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const slideItems = [
  { title: "초대 코드를 보내 친구들과\n무전을 시작해요", url: "/splash/splash_1.gif" },
  { title: "하루 한 번 친구들과\n시그널과 응답을 주고받아요", url: "/splash/splash_2.gif" },
  { title: "시그널과 응답을 주고받고\n토키를 성장시켜보세요!", url: "/splash/splash_3.gif" }
]

export default function CarouselItems() {
  return (
    <div className="w-full">
      <Swiper
        className="w-full"
        effect="fade"
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 3000
        }}
        loop
        fadeEffect={{ crossFade: true }}
        pagination={{
          el: `#splash-slider`,
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className} !bg-black !w-[4px] !h-[4px]"> </span>`
          }
        }}
      >
        {slideItems.map((slideItem) => (
          <SwiperSlide key={slideItem.url}>
            <section className="flex flex-col items-center gap-[40px]">
              <p className="whitespace-pre-line text-center text-headline-01 text-emphasis-high">{slideItem.title}</p>
              <div className="relative h-[300px] w-[300px] justify-self-center">
                <Image src={slideItem.url ?? "/"} fill alt="splash-gif" unoptimized />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <section id="splash-slider" className="mt-[40px] flex h-[12px] w-full justify-center gap-[4px]" />
    </div>
  )
}
