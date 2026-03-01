const chevronPath =
  'M4.47 6.47a.75.75 0 0 1 1.06 0L10 10.94l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06z'

function ChevronDownIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={chevronPath} stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default ChevronDownIcon