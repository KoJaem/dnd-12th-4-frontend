import type { Result } from "./result"
import type { ChannelMembersResponse } from "./channelMembersResponse"

export interface ApiChannelMembersResponse {
  result?: Result
  body?: ChannelMembersResponse
}
