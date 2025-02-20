import type { MyChannelMemberResponse } from "./myChannelMemberResponse"
import type { PageParamResponse } from "./pageParamResponse"

export interface MyChannelMemberShowAllResponse {
  myChannelMemberResponse?: MyChannelMemberResponse[]
  pageParamResponse?: PageParamResponse
}
