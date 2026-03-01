import React from "react";
import chooseImg from "../assets/image3.png";
import plusIcon from "../assets/increase.png";
import minusIcon from "../assets/decrease.png";

function WhyChooseSection() {
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
          <h2 className="text-[28px] font-semibold mb-6">
            Why Should You Choose <br /> Ada Psychiatry?
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start gap-3 border-b border-[#d4a017] pb-3">
              <img src={minusIcon} alt="minus" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium text-[16px]">Convenient access</p>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  Offering in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.
                </p>
              </div>
            </li>

            <li className="flex items-center gap-3 border-b border-[#d4a017] pb-3">
              <img src={plusIcon} alt="plus" className="w-5 h-5" />
              <p className="font-medium text-[16px]">Concierge approach</p>
            </li>

            <li className="flex items-center gap-3 border-b border-[#d4a017] pb-3">
              <img src={plusIcon} alt="plus" className="w-5 h-5" />
              <p className="font-medium text-[16px]">High quality service</p>
            </li>

            <li className="flex items-center gap-3">
              <img src={plusIcon} alt="plus" className="w-5 h-5" />
              <p className="font-medium text-[16px]">Trusted and empathic providers</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseSection