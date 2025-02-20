import type { Result } from "./result"
import type { MemberResponse } from "./memberResponse"

export interface ApiMemberResponse {
  result?: Result
  body?: MemberResponse
}
