import { create } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"
interface AnswerState {
  answer: string | null
  setAnswer: (newAnswer: string) => void
}

type AnswerPersist = PersistOptions<AnswerState>

export const useAnswerStore = create(
  persist(
    (set) => ({
      answer: "",
      setAnswer: (newAnswer: string) => set({ answer: newAnswer })
    }),
    {
      name: "answer-storage"
    } as AnswerPersist
  )
)
