interface TitleAndDescriptionBoxProps {
  title: string
  description?: string
}
export default function TitleAndDescriptionBox({ title, description }: TitleAndDescriptionBoxProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="whitespace-pre-line text-headline-01">{title}</div>
      {description && <div className="whitespace-pre-line text-body-01 text-black/60">{description}</div>}
    </div>
  )
}
