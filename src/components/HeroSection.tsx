import { Spotlight } from "./ui/Spotlight";
import "../app/globals.css";

const HeroSection = () => {

  return (
    <div className="h-auto md:h-[40erm] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center mt-56">
        <Spotlight className="left-0 md:left-40 md:-top-60" fill="white" />
        <h1 className="my-20 md:my-0 md:text-7xl vvg-gradient-to-b from-neutral-50 to-neutral-500 font-bold">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comperehensive music courses and transfor your musical
          journey today. Whether you're a bigenner or looking to refine your
          skills, join us to unlock your true potential
        </p>
        <div className="m-4">
          <div className="cards "  onClick={()=>alert("Comming Soon Bro............")}>
            <div className="card example-5">
              <svg
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  rx="8"
                  ry="8"
                  className="line"
                  height="100%"
                  width="100%"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="inner">
                <button>Exlpore courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
