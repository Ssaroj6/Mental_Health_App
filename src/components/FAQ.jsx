import React, { useState } from "react";
import plusIcon from "../assets/increase.png";
import minusIcon from "../assets/decrease.png";
import FAQImg from "../assets/faq_img.png";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Ada psychiatry confidential?",
      answer:
        "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
    },
    {
      question: "What is the best way to schedule an appointment?",
      answer:
        "You can schedule your appointment online through our website or by calling our office directly. We offer flexible scheduling options.",
    },
    {
      question: "Do you prescribe controlled substance medication?",
      answer:
        "Yes, controlled substances may be prescribed when clinically appropriate after a thorough evaluation.",
    },
    {
      question: "How long does the initial appointment take?",
      answer:
        "The initial appointment typically lasts between 45 to 60 minutes depending on your needs and evaluation.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div>
        <img src={FAQImg} alt="FAQ" className="w-full mb-12" />
      </div>
    <section className="bg-[#faf4e6] flex flex-col items-center py-20 px-6 font-['Wulkan_Display']">
      
      <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a] mb-12 text-center">
        Frequently asked questions
      </h2>

      <div className="w-full max-w-[800px] border-t border-[#d4a017]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#d4a017] py-5 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-start gap-4">
              <img
                src={openIndex === index ? minusIcon : plusIcon}
                alt="toggle"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1a1a1a] leading-snug">
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <p className="mt-3 text-[15px] text-[#1a1a1a] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-gradient-to-r from-[#d4a017] to-[#b88a12] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
        See all FAQ
      </button>
    </section>
    </div>
  );
}
export default FAQ