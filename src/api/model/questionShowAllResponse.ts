import type { QuestionResponse } from "./questionResponse"
import type { PageParamResponse } from "./pageParamResponse"

export interface QuestionShowAllResponse {
  questionResponse?: QuestionResponse[]
  pageParamResponse?: PageParamResponse
}
