import Home from "./pages/Home";
// function SectionTitle({ kicker, title, center = true }) {
//   return (
//     <div
//       className={`mx-auto max-w-3xl ${
//         center ? 'text-center' : 'text-left'
//       } space-y-2`}
//     >
//       {kicker ? (
//         <p
//           className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C18C2C]"
//           style={{ fontFamily: "'Work Sans', system-ui, sans-serif" }}
//         >
//           {kicker}
//         </p>
//       ) : null}
//       <h2
//         className="text-[32px] font-bold leading-[40px] text-[#1B1B1B] md:text-[40px] md:leading-[48px]"
//         style={{ fontFamily: "'Wulkan Display', serif" }}
//       >
//         {title}
//       </h2>
//     </div>
//   )
// }

function App() {
  return (
    <Home />
  )
}

export default App
