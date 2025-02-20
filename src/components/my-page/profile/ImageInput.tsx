import { Pen, Trash2 } from "lucide-react"
import Image from "next/image"
import { InputHTMLAttributes, useRef } from "react"

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  previewImage: string
  handleDeleteButton?: () => void
  handleImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ImageInput = ({ previewImage, handleDeleteButton, handleImageChange }: ImageInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePenClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div>
      {previewImage ? (
        <div className="relative h-[100px] w-[100px] rounded-full border border-gray-03">
          <Image src={previewImage} alt="Profile Image" fill className="rounded-full object-contain" />
          <button
            type="button"
            onClick={handleDeleteButton}
            className="absolute bottom-0 right-0 flex size-[29px] items-center justify-center rounded-full border border-opacity-[0.12] bg-gray-02"
          >
            <Trash2 className="size-4 text-black" />
          </button>
        </div>
      ) : (
        <div className="relative h-[100px] w-[100px] cursor-pointer rounded-full border border-solid">
          <input
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            type="file"
            onChange={handleImageChange}
          />
          <button
            type="button"
            onClick={handlePenClick}
            className="absolute bottom-0 right-0 flex size-[29px] items-center justify-center rounded-full border border-opacity-[0.12] bg-gray-02"
          >
            <Pen className="size-4 text-black" />
          </button>
        </div>
      )}
    </div>
  )
}
