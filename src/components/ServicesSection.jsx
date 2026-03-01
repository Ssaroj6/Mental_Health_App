import React from "react";
import psychiatric from "../assets/human-brain.png";
import medication from "../assets/mental-health.png";
import therapy from "../assets/hospital.png";
import adhd from "../assets/brain.png";
function ServicesSection() {
 const services = [
    { icon: psychiatric, title: "Psychiatric Evaluation" },
    { icon: medication, title: "Medication Management" },
    { icon: therapy, title: "Supportive Psychotherapy" },
    { icon: adhd, title: "ADHD Screening" },
    { icon: psychiatric, title: "MAT Treatment" },
    { icon: medication, title: "Gene Sight Testing" },
  ];

  return (
    <section className="bg-[#f7eed9] flex flex-col items-center py-16 px-6">
      <h2 className="text-2xl font-['Wulkan_Display'] font-bold text-[#1a1a1a] mb-10">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-[1050px] mb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[140px] font-['Wulkan_Display'] font-semibold"
          >
            <div className="bg-[#fff8e5] border border-[#e2c26e] rounded-full w-[90px] h-[90px] flex items-center justify-center mb-4 shadow-sm">
              <img src={service.icon} alt={service.title} className="w-[40px]" />
            </div>
            <p className="text-[15px] text-[#1a1a1a] font-medium leading-snug">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-gradient-to-r from-[#d4a017] to-[#b88a12] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition">
        View our services <span className="text-lg">→</span>
      </button>
    </section>
  );
}
export default ServicesSection