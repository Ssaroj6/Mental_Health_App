import founderImg from "../assets/founder_img.png";

function Founder() {
  return (
    
      <section className="relative bg-[#F7EED9] flex justify-center py-24 px-6 w-full overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-[1200px] w-full m-5">
        
        {/* Image container */}
        <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-20 flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <img
            src={founderImg}
            alt="Founder"
            className=" w-auto md:w-[450px] h-auto object-cover rounded-lg shadow-md border border-[#d4a017]"
          />
        </div>

        {/* Text box */}
        <div className="relative  border border-[#d4a017] rounded-xl p-8 md:p-10 md:pl-[340px] w-full md:w-[722px] shadow-sm z-10">
          <h2 className="text-2xl font-bold mb-2 font-['Wulkan_Display']">
            Meet The Founder
          </h2>
          <h3 className="text-lg font-medium font-['Wulkan_Display']">
            Lakeisha Appleton
          </h3>
          <p className="text-sm font-semibold text-gray-700 mb-4 font-['Work_Sans']">
            FNP-C, PMHNP-BC
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed font-['Work_Sans']">
            “Mental health problems don’t define who you are. They are something
            you experience. You walk in the rain and you feel the rain, but,
            importantly, YOU ARE NOT THE RAIN.” — Matt Haig
          </p>
          <button className="bg-[#d4a017] text-black px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#b88a12] transition">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>
      

    </section> 
  
  );
}

export default Founder;