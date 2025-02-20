import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"

export const formatUtcToKstWithRelativeTime = (utcTime: Date | string): string => {
  const kstTime = dayjs.utc(utcTime).tz("Asia/Seoul")
  const now = dayjs().tz("Asia/Seoul")

  const diffInMinutes = now.diff(kstTime, "minute")
  const diffInHours = now.diff(kstTime, "hour")

  if (diffInMinutes < 60) {
    // 1시간 이내인 경우 n분 전으로 표시
    return `${diffInMinutes}분 전`
  } else if (diffInHours < 24) {
    // 1시간 이상, 24시간 미만인 경우 n시간 전으로 표시
    return `${diffInHours}시간 전`
  } else {
    // 24시간 이상인 경우 YYYY.MM.DD 형식으로 표시
    return kstTime.format("YYYY.MM.DD")
  }
}
