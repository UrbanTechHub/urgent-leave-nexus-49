
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const heroImageUrl = '/lovable-uploads/218f7bda-28da-47a7-8cdc-f3b05fb75f29.png'; // Medical personnel assisting a patient
const heroImageAlt = 'Medical personnel assisting a patient in a field hospital'; // Updated alt text

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      
      {/* Static Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImageUrl} 
          alt={heroImageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center font-serif animate-fade-in">
          United Nations Emergency Support Center
        </h1>
        <div className="w-20 h-1 bg-white mb-8" />
        <p className="text-md md:text-xl text-center max-w-2xl mb-10 font-serif animate-fade-in">
          The UN Emergency Support Center provides a streamlined process for family members 
          to request emergency assistance for loved ones in UN-supported regions worldwide.
        </p>
        <Button 
          asChild
          className="bg-unblue hover:bg-unblue-dark text-white px-8 py-6 text-lg font-serif hover:scale-105 transition-all duration-300"
        >
          <Link to="/apply">Apply for Emergency Leave</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
