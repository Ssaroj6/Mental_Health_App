import quoteIcon from "../assets/goldquote_icon.png";
function QuoteSection() {
  return (
    <section className="relative bg-black text-white flex items-center justify-center h-[220px] overflow-hidden">

      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            fill="#f7eed9"
            d="M0,60 C120,120 240,0 360,60 C480,120 600,0 720,60 C840,120 960,0 1080,60 C1200,120 1320,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-2xl ">
       <div className="flex items-center justify-center gap-2 mb-4">
         <span className="text-[#d4a017] text-4xl">
          <img src={quoteIcon} alt="quote" className="w-6 mb-3" />
        </span>
       </div>
        <p className="text-lg md:text-xl font-medium">
          We help people living with and experiencing difficult times
        </p>
        {/* <span className="text-[#d4a017] text-4xl">”</span> */}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            fill="#f7eed9"
            d="M0,60 C120,120 240,0 360,60 C480,120 600,0 720,60 C840,120 960,0 1080,60 C1200,120 1320,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

    </section>
  );
}

export default QuoteSection;