import { IconProps } from "./commonProps"

const External: React.FC<IconProps> = ({ width, height, color = "black" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 256 256">
      <g fill={color}>
        <path d="M32 224V32H64V0H16C7.16344 0 0 7.16344 0 16V240C0 248.837 7.16344 256 16 256H240C248.837 256 256 248.837 256 240V192H224V224H32Z" />
        <path d="M240 0H134.627C120.373 0 113.234 17.2343 123.314 27.3137L228.686 132.686C238.766 142.766 256 135.627 256 121.373V16C256 7.16344 248.837 0 240 0Z" />
        <rect x="63.66" y="158.392" width="224" height="48" rx="16" transform="rotate(-45 63.66 158.392)" />
      </g>
    </svg>
  )
}

export default External
