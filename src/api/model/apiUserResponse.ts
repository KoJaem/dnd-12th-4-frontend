import type { Result } from "./result"
import type { UserResponse } from "./userResponse"

export interface ApiUserResponse {
  result?: Result
  body?: UserResponse
}
