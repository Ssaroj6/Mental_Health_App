import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tik-tok.png";

function Footer() {
  return (
    <footer className="bg-black text-white w-full px-6 md:px-16 py-12 font-['Work_Sans']">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
        {/* Quick Links */}
        <div>
          <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>Who We Are</li>
            <li>What We Treat</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>FAQs</li>
            <li>Blog</li>
            <li>Fees and Insurance</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Return Policy</li>
            <li>Cookie Settings</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mb-4">
            Business Hours
          </h3>
          <p className="text-[15px] leading-relaxed">
            Monday – Thursday <br />
            09:00 am – 4:00 pm
          </p>

          <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mt-6 mb-2">
            For Careers
          </h3>
          <p className="text-[15px] leading-relaxed">
            Interested in joining the ADA Team? <br />
            <span className="text-[#d4a017]">
              Career@adapsychiatry.com
            </span>
          </p>
        </div>

        {/* Logo and Contact */}
        <div className="flex flex-col items-start md:items-end">
         <div className="flex items-start w-[266px] h-[52px] gap-3">
           <img src={logo} alt="ADA Psychiatry"  />
          <span
            className="text-[18px] font-semibold leading-[52px] tracking-[0.3em]"
            style={{ fontFamily: "'Work Sans', system-ui, sans-serif" }}
          >
            Ada Psychiatry
          </span>
         </div>
          <div className="text-[15px] leading-relaxed text-center md:text-left">
            <p>1820 E Ray Road, STE. A107</p>
            <p>Chandler, Arizona 85225</p>
            <p>Phone: 480-526-9392</p>
          </div>

          <div className="mt-4">
            <h3 className="text-[#d4a017] font-['Wulkan_Display'] font-semibold text-[18px] mb-2">
              Follow us
            </h3>
            <div className="flex gap-3">
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
              <img src={twitter} alt="Twitter" className="w-5 h-5" />
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              <img src={tiktok} alt="TikTok" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-[#333] mt-10 pt-6 text-center text-[14px] text-gray-400">
        © Ada Psychiatry. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;