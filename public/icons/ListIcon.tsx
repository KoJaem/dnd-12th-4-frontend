import React from "react"

export const ListIcon = ({ width = 24, height = 24, color = "#1A1E21", ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" {...props}>
      <path fill="#FFFFFF" d="M24 0H0v24h24V0Z" opacity=".3" />
      <path fill={color} d="M0 2v18h9l3 4 3-4h9V2H0Zm9 10H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Z" />
    </svg>
  )
}
