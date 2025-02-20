import type { Result } from "./result"
import type { RefreshTokenResponse } from "./refreshTokenResponse"

export interface ApiRefreshTokenResponse {
  result?: Result
  body?: RefreshTokenResponse
}
