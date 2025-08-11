import ImgSection from "./Img-section";
import Text from "./Text"


function HeroSection() {
  return (
    <div className="relative  w-full flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-10 z-0"></div>

      {/* Text content */}
      <div className="relative flex sm:flex-col lg:flex-row flex-col md:justify-center md:items-center w-[100%] md:gap-0 gap-24 z-10 md:mb-42 mb-12">
        <Text />
        <ImgSection/>
      </div>
    </div>
  );
}


export default HeroSection
