import React from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";

function StepsSection() {
  const steps = [
    {
      id: "01",
      icon: logo1,
      title: "Schedule an appointment",
    },
    {
      id: "02",
      icon: logo2,
      title: "Connect with your provider",
    },
    {
      id: "03",
      icon: logo3,
      title: "Discuss your comprehensive assessment",
    },
    {
      id: "04",
      icon: logo4,
      title: "Receive your individualized treatment plan",
    },
  ];

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center py-20 px-6">
      <h2 className="text-[28px] font-['Wulkan Display'] font-bold mb-14 text-center text-[#C18C2C]">
        Four Simple Steps To <br /> Get Started
      </h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-12 w-full max-w-[1200px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-[60px] h-[60px] mb-4"
            />
            <p className="text-[#d4a017] font-semibold text-[18px] mb-2">
              {step.id}
            </p>
            <p className="text-[15px] text-[#f7eed9] max-w-[180px] leading-snug">
              {step.title}
            </p>

            {/* Dotted line between icons */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-[30px] right-[-80px] w-[80px] border-t border-dotted border-[#d4a017]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-gradient-to-r from-[#d4a017] to-[#b88a12] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition">
        Schedule a Call <span className="text-lg">→</span>
      </button>
    </section>
  );
}
export default StepsSection