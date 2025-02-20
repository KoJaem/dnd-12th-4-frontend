import ModalWrapper from "@/components/common/ModalWrapper"
import Button from "@/components/common/Button"

interface Params {
  title: string
  description?: string
  onCancel: () => void
  onClick: () => void
  disabled?: boolean
}
export default function ConfirmModal({ title, description, onCancel, onClick, disabled = false }: Params) {
  console.log(disabled)
  return (
    <ModalWrapper overlayClose onClose={onCancel}>
      <section className="z-[100] flex w-[340px] flex-col items-center gap-[20px] rounded-[24px] bg-white px-[20px] pb-[20px] pt-[40px]">
        <article className="flex flex-col gap-[8px] whitespace-pre-line text-center">
          <p className="text-subtitle-01 text-emphasis-high">{title}</p>
          {description && <p className="text-body-02 text-emphasis-high">{description}</p>}
        </article>
        <article className="flex w-full gap-[12px]">
          <Button
            className="flex h-[52px] w-full items-center justify-center bg-gray-300 text-body-01 text-emphasis-high"
            onClick={onCancel}
          >
            취소
          </Button>
          <Button
            className="flex h-[52px] w-full items-center justify-center bg-primary-200 text-body-01 text-emphasis-high"
            onClick={onClick}
          >
            나갈래요
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
