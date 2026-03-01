import { useState } from "react";
import chooseImg from "../assets/image3.png";
import plusIcon from "../assets/increase.png";
import minusIcon from "../assets/decrease.png";

function WhyChooseSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const items = [
    {
      title: "Convenient access",
      content:
        "Offering in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
    },
    {
      title: "Concierge approach",
      content:
        "We provide personalized care with minimal waiting time and direct communication with your provider.",
    },
    {
      title: "High quality service",
      content:
        "Our team ensures evidence-based, compassionate, and professional mental health care.",
    },
    {
      title: "Trusted and empathic providers",
      content:
        "We are dedicated to understanding your needs and building a safe, supportive environment.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7eed9] flex justify-center py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] w-full gap-10">
        {/* Left image */}
        <div className="w-full md:w-[520px] h-[340px] overflow-hidden rounded-lg">
          <img
            src={chooseImg}
            alt="Why Choose Ada Psychiatry"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-[550px] text-[#1a1a1a]">
          <h2 className="text-[28px] font-semibold mb-6 font-['Wulkan_Display']">
            Why Should You Choose <br /> Ada Psychiatry?
          </h2>

          <ul className="space-y-5">
            {items.map((item, index) => (
              <li
                key={index}
                className="border-b border-[#d4a017] pb-3 cursor-pointer transition-all"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt={openIndex === index ? "collapse" : "expand"}
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-[16px] font-['Wulkan_Display']">
                      {item.title}
                    </p>
                    {openIndex === index && (
                      <p className="text-[14px] text-gray-700 leading-relaxed mt-1 font-['Work_Sans']">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;