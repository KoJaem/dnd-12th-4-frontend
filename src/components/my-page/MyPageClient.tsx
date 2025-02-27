"use client"

import React, { useState } from "react"
import MenuHeader from "../common/MenuHeader"
import ChannelSection from "./my-info/ChannelSection"
import ProfileCard from "./profile/ProfileCard"
import ChannelBottomSheet from "../channels/ChannelBottomSheet"

export default function MyPageClient() {
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  return (
    <>
      <main className="px-[16px]">
        <MenuHeader title="내 정보" />
        <div className="flex flex-col gap-[20px]">
          <ProfileCard />
          <div>
            <MenuHeader
              title="현재 속한 채널"
              buttonTitle="추가"
              button
              buttonClassName="bg-gray-08 text-caption-01 text-white"
              titleClassName="text-subtitle-01 font-semibold"
              onClick={() => setIsOpenChannelSheet(true)}
            />
            <ChannelSection />
          </div>
        </div>
      </main>
      <ChannelBottomSheet isOpen={isOpenChannelSheet} setIsOpen={setIsOpenChannelSheet} />
    </>
  )
}
