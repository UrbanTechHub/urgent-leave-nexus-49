
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1579154204601-01588f351e67')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center font-serif">
          United Nations Emergency Leave Application Center
        </h1>
        <div className="w-20 h-1 bg-white mb-8" />
        <p className="text-md md:text-xl text-center max-w-2xl mb-10 font-serif">
          The UN Emergency Leave Application Center provides a streamlined process for family members 
          to request emergency leave for military personnel deployed in UN missions worldwide.
        </p>
        <Button 
          className="bg-unblue hover:bg-unblue-dark text-white px-8 py-6 text-lg font-serif"
          asChild
        >
          <Link to="/apply">Apply for Emergency Leave</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
