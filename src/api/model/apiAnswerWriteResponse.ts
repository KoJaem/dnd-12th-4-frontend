import type { Result } from "./result"
import type { AnswerWriteResponse } from "./answerWriteResponse"

export interface ApiAnswerWriteResponse {
  result?: Result
  body?: AnswerWriteResponse
}
