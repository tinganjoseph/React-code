import "./beauty.css";
import { hero, shape, shape1 } from "../images/index";
const HeroSection = () => {
  return (
    <div >
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start mt-20 ">
      <div className='flex flex-col justify-center items-center mt-24 ml-8 mr-8'>
          
          <div className='w-1 sm:h-80 h-40 bg-[#ffffff]' />
          <div className='w-5 h-5 rounded-full bg-[#ffffff]' />
        </div>
        {/* Left Col */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-10 mt-16 md:mb-0">
   
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="font-black text-pink-800 lg:text-[30px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            <span className="text-white">Unleash</span> Your Football Journey
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="leading-normal text-xl font-mono mb-8 text-white"
          >
            Our platform is a springboard for African footballers to reach their
            full potential. We provide unparalleled support, resources, and
            opportunities for aspiring talents, empowering them to rise, conquer
            challenges, and leave a lasting legacy in the world of football.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="w-full md:flex items-center mt-10 justify-center lg:justify-start md:space-x-8"
          >
            <button className="lg:mx-0 bg-pink-900 text-white text-xl font-bold rounded-lg py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Join us
            </button>
            <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                    fill="#e20505"
                  />
                </svg>
              </button>
              <span className="cursor-pointer font-bold text-lg">
                Watch Talents
              </span>
            </div>
          </div>
        </div>
        {/* Right Col */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative " id="hero">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            className="w-10/12 mx-auto 2xl:-mb-20 animate-pulse"
            src={hero}
            alt="hero"
          />
          {/* shape */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="absolute top-20  sm:top-32 sm:left-20 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img className="h-12 sm:h-16" src={shape} alt="shape" />
          </div>

          {/* Red */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className="absolute top-20 right-2 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-18 lg:right-16 floating"
          >
            <img className="h-16 sm:h-24" src={shape} alt="shape" />
          </div>

          {/* bottom */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img className="h-12 sm:h-16" src={shape1} alt="shape" />
          </div>
          {/* bottom */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <img className=" h-12 sm:h-16" src={shape1} alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
