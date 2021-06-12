import { IconProps } from "./commonProps"

interface Props extends IconProps {
  textColor?: string
}
const TypeScript: React.FC<Props> = ({ width, height, color = "#1976d2", textColor = "#fff" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 105 105">
      <path fill={color} d="M0 0H105V105H0V0Z" />
      <path
        fill={textColor}
        d="M62.68 46.67H24v9.5h13.86v43h11v-43h13.82v-9.5zm34.15 11.9s-5.25-3.47-11.1-3.47c-5.87 0-8.03 2.8-8.03 5.8 0 7.73 21.53 6.94 21.53 22.49 0 23.91-32.82 13.33-32.82 13.33v-11.5s6.27 4.73 13.8 4.73c7.52 0 7.23-4.93 7.23-5.6 0-7.15-21.32-7.15-21.32-22.98 0-21.53 31.1-13.04 31.1-13.04l-.42 10.24h.03z"
      />
    </svg>
  )
}

export default TypeScript
