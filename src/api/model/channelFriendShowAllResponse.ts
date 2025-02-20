import type { ChannelFriendResponse } from "./channelFriendResponse"
import type { PageParamResponse } from "./pageParamResponse"

export interface ChannelFriendShowAllResponse {
  channelFriendResponseList?: ChannelFriendResponse[]
  pageParamResponse?: PageParamResponse
}
