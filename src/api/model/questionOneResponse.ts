import type { QuestionResponse } from "./questionResponse"

export interface QuestionOneResponse {
  questionResponse?: QuestionResponse
  hasMyAnswer?: boolean
  mySignal?: boolean
}
