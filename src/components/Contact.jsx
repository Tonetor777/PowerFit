import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => (
  <section id='contact-section' className="my-12 p-4">
    <div className="lg:px-32 bg-gray-50  p-10 md:p-0 py-12">
      <h1 className="text-4xl font-bold mb-12 border-l-4 border-yellow-500 pl-4 ml-8">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-6 justify-center mt-16  py-12">
        {/* Contact Details */}
        <div className="flex flex-col items-start w-full lg:w-[40%]">
          <div className="mb-4 space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 mr-3" />
              <p className="text-lg"><strong>Phone:</strong> +251930856496</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-500 mr-3" />
              <p className="text-lg"><strong>Email:</strong> powerfit@gym.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              <p className="text-lg"><strong>Address:</strong> Addis Ababa, Bole</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full py-2 px-3 border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-700"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-2 px-3 border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-700"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full py-2 px-3 border-b-2 border-yellow-500 focus:outline-none focus:border-yellow-700"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
