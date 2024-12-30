import React from 'react';
import pulldown from '../assets/latpulldown.jpg';
const Products = () => (
  <div className="p-8 md:px-32">
    <h1 className="text-4xl font-bold mb-12 border-l-4 border-yellow-500 pl-4 ml-8 ">Our Product</h1>
    <div className='md:w-[80%] mx-auto flex flex-col md:flex-row flex-wrap bg-zinc-800 gap-4 justify-between'>
      <div className='md:w-1/2  p-6 '>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">Lat Pulldown Machine</h2>
        <p className='text-white text-justify md:text-lg'>Our Lat Pulldown Machine is designed to help you build upper body strength and improve your posture. It features adjustable weights and a comfortable seat to accommodate users of all fitness levels. With every pull, you generate clean energy that can be used to power your home or gym.</p>
      </div>
      <div className='md:w-[40%] p-6'>
        <img
          src={pulldown}
          alt="Lat Pulldown Machine"
          className="w-[400px] h-auto object-cover"
        />
      </div>
    </div>
    </div>
);

export default Products;