import Image from "next/image"
import Link from "next/link"

export default function notFound() {
  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center gap-[24px] px-[16px]">
        <div className="relative rounded-md bg-primary-0">
          <Image src={"/talki/gif/talki_front.gif"} alt="talki" width={300} height={300} />
        </div>
        <p className="text-headline-01">잘못된 주소입니다!</p>
        <Link href={"/"} className="rounded-xsm bg-primary px-[16px] py-[12px]">
          홈으로
        </Link>
      </section>
    </div>
  )
}
