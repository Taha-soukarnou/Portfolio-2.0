function LogoShape() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 overflow-visible text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g className="shape-outer">
        <polygon points="37,20 28.5,34.7 11.5,34.7 3,20 11.5,5.3 28.5,5.3" />
        <circle cx="37" cy="20" r="2.2" fill="currentColor" stroke="none" />
      </g>
      <g className="shape-inner">
        <polygon points="20,11 27.8,24.5 12.2,24.5" />
      </g>
      <circle className="shape-core" cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default LogoShape