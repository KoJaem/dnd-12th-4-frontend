import type { ChannelMemberDto } from "./channelMemberDto"
import type { PageParamResponse } from "./pageParamResponse"

export interface ChannelMembersResponse {
  channelName?: string
  memberCount?: number
  channelMembers?: ChannelMemberDto[]
  pageParamResponse?: PageParamResponse
}
