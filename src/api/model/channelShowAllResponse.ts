import type { ChannelShowResponse } from "./channelShowResponse"
import type { PageParamResponse } from "./pageParamResponse"

export interface ChannelShowAllResponse {
  channelShowResponse?: ChannelShowResponse[]
  pageParamResponse?: PageParamResponse
}
