import Image from "next/image"
interface Params {
  nickname?: string
  channelName?: string
  url?: string
}
export default function FriendInformation({ nickname, channelName, url }: Params) {
  return (
    <section className="flex items-center gap-[12px] rounded-[20px] bg-gray-01 p-[20px]">
      <div className="relative h-[44px] w-[44px]">
        <Image src={url ?? "/"} alt="profile-image" fill className="rounded-full object-contain" />
      </div>
      <div>
        <p className="text-body-01 text-emphasis-high">{nickname}</p>
        <p className="text-body-04 text-emphasis-medium">{channelName}</p>
      </div>
    </section>
  )
}
