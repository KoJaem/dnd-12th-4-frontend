import { create } from "zustand"

interface AnswerState {
  answer: string | null
  setAnswer: (newAnswer: string) => void
}

const useAnswerStore = create<AnswerState>((set) => ({
  answer: "",
  setAnswer: (newAnswer) => set({ answer: newAnswer })
}))

export default useAnswerStore
