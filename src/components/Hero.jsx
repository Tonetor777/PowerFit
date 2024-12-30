import React from 'react';
import gympic from '../assets/gym.jpg';
import powerfit from '../assets/Power_fit.svg';
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
  <div className="w-full h-[700px] relative">
    <nav className="w-full flex justify-between items-center p-8 bg-transparent absolute top-0 left-0">
      <img src={powerfit} alt="Power Fit Logo" className=" w-60 h-20 object-cover" />
    </nav>
    <div className="flex w-full md:h-full justify-center">
      <div className="w-3/5 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-60 md:mt-0 ">Work Out, Power Up!</h1>
        <p className="md:text-xl text-md ">Revolutionize fitness with our electricity-generating gym equipment.</p>
        <button onClick={scrollToContact} className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition duration-300 text-lg">
          Contact Us
        </button>
      </div>
      <div className="w-2/5 bg-yellow-500 items-center pt-16 pl-5 hidden md:flex">
        {/* Rectangle */}
        <div className="w-3/5 h-[90%] bg-zinc-800 m-auto relative z-10 ">
        {/* Image */}
        <img
          src={gympic}
          alt="Fitness Equipment"
          className="absolute z-20 w-[90%] h-[90%] object-cover top-1/2 left-1/2 transform -translate-x-[80%] -translate-y-1/2"
        />
        </div>

        
      </div>
    </div>
  </div>
);
};

export default Hero;
