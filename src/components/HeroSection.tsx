
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const heroImageUrl = '/lovable-uploads/8470ccda-6f99-4308-815a-8ee8f815319.png';
const heroImageAlt = 'Military personnel holding a child';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      
      {/* Static Hero Image */}
      <div className="absolute inset-0">
        <AspectRatio ratio={16/9} className="h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroImageUrl}')`,
            }}
            aria-label={heroImageAlt}
          />
        </AspectRatio>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center font-serif animate-fade-in">
          United Nations Emergency Leave Application Center
        </h1>
        <div className="w-20 h-1 bg-white mb-8" />
        <p className="text-md md:text-xl text-center max-w-2xl mb-10 font-serif animate-fade-in">
          The UN Emergency Leave Application Center provides a streamlined process for family members 
          to request emergency leave for military personnel deployed in UN missions worldwide.
        </p>
        <Button 
          className="bg-unblue hover:bg-unblue-dark text-white px-8 py-6 text-lg font-serif hover:scale-105 transition-all duration-300"
          asChild
        >
          <Link to="/apply">Apply for Emergency Leave</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
