import React from "react";
import heroBg from "../../assets/images/more/6.jpeg";
import aroma from '../../assets/images/icons/1.png'
import quality from '../../assets/images/icons/2.png'
import purity from '../../assets/images/icons/3.png'
import roasting from '../../assets/images/icons/4.png'

const Hero = () => {
  return (
    <div>
      <section className="w-full relative">
        <img
          src={heroBg}
          className="transform scale-x-[-1] object-cover"
          alt=""
        />
        <div className="absolute top-1/3 left-1/2 ">
          <h2 className="text-white text-[55px]">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white mt-4 mb-8 raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! <br /> Celebrate
            beautiful moments and make them memorable.
          </p>
          <button className="text-2xl text-[#242222] px-4 py-3 bg-[#E3B577] rounded-sm">
            Learn More
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center bg-[#ECEAE3] gap-16 py-16">
        <div>
          <img className="h-[70px] w-[70px]" src={aroma} alt="" />
          <h3 className="text-[35px] text-[#331A15] mt-4 mb-2">
            Awesome Aroma
          </h3>
          <p className="text-[#1B1A1A] raleway">
            You will definitely be a fan of the design <br />& aroma of your
            coffee
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px]" src={quality} alt="" />
          <h3 className="text-[35px] text-[#331A15] mt-4 mb-2">High Quality</h3>
          <p className="text-[#1B1A1A] raleway">
            We served the coffee to you maintaining <br />
            the best quality
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px]" src={purity} alt="" />
          <h3 className="text-[35px] text-[#331A15] mt-4 mb-2">Pure Grades</h3>
          <p className="text-[#1B1A1A] raleway">
            The coffee is made of the green coffee <br />
            beans which you will love
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px]" src={roasting} alt="" />
          <h3 className="text-[35px] text-[#331A15] mt-4 mb-2">
            Proper Roasting
          </h3>
          <p className="text-[#1B1A1A] raleway">
            Your coffee is brewed by first roasting <br />
            the green coffee beans
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
