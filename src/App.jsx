import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Buy from './components/Buy';
import Products from './components/Products';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Products />
      <Buy />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;