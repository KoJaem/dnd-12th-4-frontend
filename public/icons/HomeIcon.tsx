import React from "react"

export const HomeIcon = ({ width = 24, height = 24, color = "#1A1E21", ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" {...props}>
      <path fill="#FFFFFF" d="M24 0H0v24h24V0Z" opacity=".3" />
      <path fill={color} d="M12 0 0 8v16h9v-6h6v6h9V8L12 0Z" />
    </svg>
  )
}
