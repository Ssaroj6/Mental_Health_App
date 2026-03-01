import ArrowRightIcon from "../Icons/ArrowRightIcon";
// import heroImg from "../assets/hero_img.png";
const heroImg = undefined
function Hero() {
  return (
    <section className="relative isolate w-full bg-[#FAF4E6]">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative h-[565px] w-full overflow-hidden">
          {heroImg ? (
            <img
              src={heroImg}
              alt="Patient with provider"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-[url('/hero_img.png')] bg-cover bg-center" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 text-white md:px-[100px]">
              
              <h1
                className="max-w-[465px] text-[32px] font-semibold leading-[40px] uppercase md:text-[48px] md:leading-[56px]"
                style={{ fontFamily: "'Wulkan Display', serif" }}
              >
                Need A Mental Health Provider?
              </h1>
              <p
                className="mb-2 text-[20px] font-semibold leading-[28px]"
                style={{ fontFamily: "'Wulkan Display', serif" }}
              >
                No Look Further
              </p>
              <p
                className="mt-4 max-w-[425px] text-[18px] leading-[28px] md:text-[20px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our goal is to provide a safe, comfortable, and warm
                environment so that you can openly discuss your mental health
                needs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button className="flex h-[50px] items-center justify-center gap-2 rounded-full px-6 text-[16px] font-medium text-black bg-gradient-to-r from-[#D4A437] to-[#F4D06F] shadow-md">
                  Learn More
                  <ArrowRightIcon className="h-[18px] w-[18px]" />
                </button>
                </div>

                <div className="flex items-center gap-1.5 text-sm pl-2 mt-2 ">
                  <div className="flex items-center gap-1 ">
                    <span className="inline-block h-[16px] w-[16px] rounded-[4px] bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]" />
                    <span className="inline-block h-[16px] w-[16px] rounded-[4px] border border-[#DAA520]" />
                    <span className="inline-block h-[16px] w-[16px] rounded-[4px] border border-[#DAA520]" />
                    <span className="inline-block h-[16px] w-[16px] rounded-[4px] border border-[#DAA520]" />
                    <span className="inline-block h-[16px] w-[16px] rounded-[4px] border border-[#DAA520]" />
                  </div>
                  {/* <span className="opacity-80">Patient rated care</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
export default Hero