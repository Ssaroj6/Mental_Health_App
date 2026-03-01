import React, { useState } from "react";
import quoteIcon from "../assets/quote_icon.png";
import user from "../assets/user_img.png";

function ReviewsSection() {
  const [active, setActive] = useState(1);

  const reviews = [
    {
      id: 1,
      text: `"ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach."`,
      name: "Carl Rowan",
      role: "Adults Inc",
      img: user,
    },
    {
      id: 2,
      text: `"ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach."`,
      name: "Sarah Johnson",
      role: "Patient",
      img: user,
    },
    {
      id: 3,
      text: `"ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach."`,
      name: "James Lee",
      role: "Client",
      img: user,
    },
  ];

  return (
    <section className="bg-[#f7eed9] flex flex-col items-center py-20 px-6">
      <h2 className="font-['Wulkan_Display'] text-2xl font-semibold text-[#1a1a1a] mb-12">
        What Our Patients Are Saying
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-[1200px] transition-all duration-300">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            onClick={() => setActive(index)}
            className={`cursor-pointer bg-[#fff8e5] border border-[#e2c26e] rounded-2xl shadow-sm flex flex-col justify-between p-6 w-full md:w-[350px] h-[320px] transition-all duration-300 ${
              active === index
                ? "scale-105 shadow-lg border-[#d4a017]"
                : "opacity-80 hover:opacity-100"
            }`}
          >
            <div>
              <img src={quoteIcon} alt="quote" className="w-6 mb-3" />
              <p className="text-[15px] text-[#1a1a1a] leading-relaxed">
                {review.text}
              </p>
            </div>
            <div>
            <div className="flex items-center gap-3 mt-6 border-t border-[#d4a017] pt-3 bg-[#C18C2C] text-white rounded-lg p-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[15px]">{review.name}</p>
                <p className="text-[13px] text-gray-600">{review.role}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ReviewsSection;