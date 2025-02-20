import type { Result } from "./result"
import type { ChannelStatusResponse } from "./channelStatusResponse"

export interface ApiChannelStatusResponse {
  result?: Result
  body?: ChannelStatusResponse
}
