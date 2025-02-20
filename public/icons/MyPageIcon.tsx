import React from "react"

export const MyPageIcon = ({ width = 24, height = 24, color = "#1A1E21", ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" {...props}>
      <path fill="#FFFFFF" d="M24 0H0v24h24V0Z" opacity=".3" />
      <path fill={color} d="M24 12H0v12h24V12ZM17 0H7v10h10V0Z" />
    </svg>
  )
}
