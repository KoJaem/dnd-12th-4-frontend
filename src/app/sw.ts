import { defaultCache } from "@serwist/next/worker"
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist"
import { Serwist } from "serwist"
import { NetworkOnly } from "workbox-strategies"
import { registerRoute } from "workbox-routing"

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
  }
}

declare const self: ServiceWorkerGlobalScope

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  // ✅ 직접 defaultCache를 수정하거나, 아래처럼 따로 라우팅 추가
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document"
        }
      }
    ]
  }
})

serwist.addEventListeners()

// ✅ next-auth API 요청은 캐시하지 않도록 설정
registerRoute(({ url }) => url.pathname.startsWith("/api/auth"), new NetworkOnly())
