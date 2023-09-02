export default function AnimatedMDX() {
  return (
    <svg role="img" aria-label="MDX" viewBox="0 0 546 222">
      <title>MDX</title>
      <rect width="546" height="222" rx="18" fill="#fcb32c" />
      <g stroke="black" strokeWidth="24" fill="none">
        <path d="M63 173V73L118 128L174 72V172" />
        <g>
          <path d="M279 157V40" />
          <path d="M225 106L279 160L333 106" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0 -20;0 20;0 -20;"
            dur="1.5s"
            repeatCount="indefinite"
            // keyTimes="0;0.6;1;"
            // keyPoints="0;0.5;1;"
          />
        </g>
        <g transform="translate(430 104)">
          <g>
            <path d="M58 58L-58 -58M-58 58L58 -58" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur="3s"
              repeatCount="indefinite"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
