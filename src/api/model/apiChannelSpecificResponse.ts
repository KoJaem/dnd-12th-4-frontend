import type { Result } from "./result"
import type { ChannelSpecificResponse } from "./channelSpecificResponse"

export interface ApiChannelSpecificResponse {
  result?: Result
  body?: ChannelSpecificResponse
}
