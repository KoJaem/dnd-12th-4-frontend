import { cn } from "@/utils/cn"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/layout/Header"))
const Footer = dynamic(() => import("@/components/layout/Footer"))

interface Params {
  children: React.ReactNode
  header?: boolean
  headerTitle?: string
  footer?: boolean
}
export default function HeaderFooterWrapper({ children, header, headerTitle, footer }: Params) {
  return (
    <>
      {header && <Header title={headerTitle} />}
      <section className={cn(header && "pt-[56px]", footer && "pb-[92px]", "h-full w-full")}>
        <section className="relative h-full w-full">{children}</section>
      </section>
      {footer && <Footer />}
    </>
  )
}
