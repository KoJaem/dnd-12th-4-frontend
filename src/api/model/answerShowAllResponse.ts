import type { AnswerQuestionDTO } from "./answerQuestionDTO"
import type { AnswerResponse } from "./answerResponse"
import type { PageParamResponse } from "./pageParamResponse"

export interface AnswerShowAllResponse {
  signalCount?: number
  questionDTO?: AnswerQuestionDTO
  answerList?: AnswerResponse[]
  pageParamResponse?: PageParamResponse
}
