import React from 'react';

const About = () => (
  <div className="p-8 px-32">
    <h1 className="text-4xl font-bold mb-12 border-l-4 border-yellow-500 pl-4 ml-8 ">About Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-800 ">
      <div className="bg-yellow-500 p-6 transition-transform duration-300 ease-in-out transform hover:translate-y-[-20px]">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p>At PowerFit, we’re passionate about fitness and sustainability. We specialize in innovative gym equipment that not only helps you achieve your fitness goals but also generates clean, renewable electricity with every workout. Our mission is to redefine the way people think about exercise and energy consumption.</p>
      </div>
      <div className="bg-yellow-500 p-6 transition-all duration-700 ease-in-out hover:bg-white">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p>To create a future where fitness and sustainability go hand in hand. We believe in empowering individuals and communities to contribute to a greener planet while building healthier lifestyles.</p>
      </div>
      <div className="bg-yellow-500 p-6 transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px]">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <p>We design and manufacture cutting-edge gym equipment that transforms your physical effort into usable energy. From treadmills to exercise bikes, our products are engineered to seamlessly integrate into your fitness routine while reducing your carbon footprint.</p>
      </div>
    </div>
    <div className='mt-12 p-6 text-yellow-500'>
  <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900">Why Choose Us?</h2>
  <div className="flex flex-col gap-6">
    {[
      "Eco-Friendly Innovation: Be part of the movement to make workouts sustainable.",
      "High-Quality Equipment: Durable, efficient, and built for performance.",
      "Smart Technology: Monitor your energy output and track your fitness progress.",
      "Community Impact: Together, we can make a difference in reducing global energy consumption."
    ].map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-zinc-900 flex items-center">
        <div className="mr-4">
          <span className="text-yellow-500 font-bold text-5xl items-center justify-center">{`0${index + 1}`}</span>
        </div>
        <p className="marker:text-yellow-500 marker:text-2xl text-xl font-semibold">{item}</p>
      </div>
    ))}
  </div>
</div>


  </div>
);

export default About;
