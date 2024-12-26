import React from 'react';

const Footer = () => (
  <footer className="bg-zinc-800 text-white py-4 mt-16 ">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} PowerFit. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-accent">Facebook</a>
        <a href="#" className="hover:text-accent">Twitter</a>
        <a href="#" className="hover:text-accent">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;