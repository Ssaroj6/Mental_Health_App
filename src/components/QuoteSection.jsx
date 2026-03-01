// function QuoteSection() {
//   return (
//     <section className="relative bg-[#f7eed9] text-white flex justify-center items-center h-[241px] w-full overflow-hidden">
//       {/* Top curve */}
//       <div className="absolute top-0 left-0 w-full">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 150"
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#000000" // background color of the previous section (Founder)
//             d="M0,60
//         C30,40 60,80 90,60
//         C120,40 150,80 180,60
//         C210,40 240,80 270,60
//         C300,40 330,80 360,60
//         C390,40 420,80 450,60
//         C480,40 510,80 540,60
//         C570,40 600,80 630,60
//         C660,40 690,80 720,60
//         C750,40 780,80 810,60
//         C840,40 870,80 900,60
//         C930,40 960,80 990,60
//         C1020,40 1050,80 1080,60
//         C1110,40 1140,80 1170,60
//         C1200,40 1230,80 1260,60
//         C1290,40 1320,80 1350,60
//         C1380,40 1410,80 1440,60
//         L1440,120 L0,120 Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Quote text */}
//       <div className="relative z-10 text-center px-6">
//         <span className="text-[#d4a017] text-4xl leading-none">“</span>
//         <p className="text-xl font-medium inline-block mx-2">
//           We help people living with and experiencing difficult times
//         </p>
//         <span className="text-[#d4a017] text-4xl leading-none">”</span>
//       </div>

//       {/* Bottom curve */}
//       <div className="absolute bottom-0 left-0 w-full rotate-180">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 150"
//           className="w-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="black"
//             d="M0,60
//         C30,40 60,80 90,60
//         C120,40 150,80 180,60
//         C210,40 240,80 270,60
//         C300,40 330,80 360,60
//         C390,40 420,80 450,60
//         C480,40 510,80 540,60
//         C570,40 600,80 630,60
//         C660,40 690,80 720,60
//         C750,40 780,80 810,60
//         C840,40 870,80 900,60
//         C930,40 960,80 990,60
//         C1020,40 1050,80 1080,60
//         C1110,40 1140,80 1170,60
//         C1200,40 1230,80 1260,60
//         C1290,40 1320,80 1350,60
//         C1380,40 1410,80 1440,60
//         L1440,120 L0,120 Z"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }
// export default QuoteSection
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