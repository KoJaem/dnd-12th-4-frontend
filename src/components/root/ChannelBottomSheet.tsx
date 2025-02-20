import { useFindChannelsByRole } from "@/api/channel-controller/channel-controller"
import "@/styles/bottomSheet.css"
import { Dispatch, SetStateAction } from "react"
import { Sheet } from "react-modal-sheet"
import ChannelBox from "@/components/root/ChannelBox"
import { XIcon } from "lucide-react"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ChannelBottomSheet({ isOpen, setIsOpen }: Params) {
  const { data } = useFindChannelsByRole()

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="full-height" className="">
      <Sheet.Container className="!rounded-t-[20px]">
        <Sheet.Content>
          <Sheet.Scroller>
            <section className="flex flex-col gap-[20px] p-[16px]">
              <article className="flex w-full justify-between">
                <p className="text-subtitle-02 font-semibold text-emphasis-high">채널</p>
                <XIcon size={20} color="#000000DE" className="cursor-pointer" onClick={() => setIsOpen(false)} />
              </article>
              {data?.body?.channelShowResponse?.map((data) => (
                <ChannelBox
                  key={data.channelId}
                  channelId={data.channelId as string}
                  count={data.signalCount || 0}
                  name={data.channelRoomName ?? "-"}
                  memberCount={data?.countPerson || 1}
                />
              ))}
            </section>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}
