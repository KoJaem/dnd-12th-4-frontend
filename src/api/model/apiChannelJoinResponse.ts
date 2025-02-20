import type { Result } from "./result"
import type { ChannelJoinResponse } from "./channelJoinResponse"

export interface ApiChannelJoinResponse {
  result?: Result
  body?: ChannelJoinResponse
}
