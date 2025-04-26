
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
  return (
    <div className="hero-section h-screen flex items-center justify-center">
      <div className="text-center text-white max-w-4xl px-4">
        <div className="mb-6">
          <span className="om-symbol text-6xl sm:text-7xl md:text-8xl font-bold inline-block">ॐ</span>
        </div>
        <h1 className="font-devnagari text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          ॐ नमः शिवाय | Welcome to स्वयंभू पालेश्वर महादेव मंदिर देवस्थान
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
          A sacred Shiva temple with a rich heritage spanning centuries, offering spiritual solace and divine blessings to devotees.
        </p>
        <button 
          onClick={scrollToAbout}
          className="btn-primary flex items-center mx-auto"
        >
          <span>Know More</span>
          <ArrowDown size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
