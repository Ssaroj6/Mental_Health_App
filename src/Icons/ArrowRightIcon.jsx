const arrowRightPath =
  'M4 12.75h11.19l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 1.06l3.72 3.72H4a.75.75 0 0 0 0 1.5z'

function ArrowRightIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={arrowRightPath} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export default ArrowRightIcon