import ChevronDownIcon from "../Icons/ChevronDownIcon"
import ArrowRightIcon from "../Icons/ArrowRightIcon"
import logoImg from "../assets/logo1.png";
function Navbar() {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto flex h-[83px] max-w-[1440px] items-center justify-between px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-white/10">
            {logoImg ? (
              <img
                src={logoImg}
                alt="Ada Psychiatry logo"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-xs font-semibold tracking-[0.2em]">
                ADA
              </span>
            )}
          </div>
          <span
            className="text-[18px] font-semibold leading-[52px] tracking-[0.3em]"
            style={{ fontFamily: "'Work Sans', system-ui, sans-serif" }}
          >
            Ada Psychiatry
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-[14px] font-medium md:flex">
          <button className="flex items-center gap-1">
            <span>Who we are</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1">
            <span>Who we treat</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1">
            <span>Services</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1">
            <span>Resources</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </nav>

        <button className="flex h-[46px] items-center justify-center rounded-full px-6 text-[14px] font-medium text-black bg-gradient-to-r from-[#D4A437] to-[#F4D06F] shadow-md">
          Book an Appointment
        </button>
      </div>
    </header>
  )
}

export default Navbar