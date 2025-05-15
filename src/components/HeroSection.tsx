
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1621427628124-499ff0f6d80b',
    alt: 'Military medical personnel treating patients in a field hospital'
  },
  {
    url: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38',
    alt: 'Doctors and nurses providing care in a refugee camp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144',
    alt: 'Military nurse attending to a child in humanitarian mission'
  },
  {
    url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289',
    alt: 'Medical team working in emergency field conditions'
  },
  {
    url: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab',
    alt: 'UN peacekeeping medical staff providing healthcare'
  }
];

const HeroSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  useEffect(() => {
    const interval = autoPlay 
      ? setInterval(() => {
          document.querySelector('.carousel-next-button')?.dispatchEvent(
            new MouseEvent('click', { bubbles: true })
          );
        }, 5000) 
      : undefined;
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <div className="relative h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      
      {/* Slideshow */}
      <div className="absolute inset-0">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {slideImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <AspectRatio ratio={16/9} className="h-full">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{
                      backgroundImage: `url('${image.url}')`,
                    }}
                    aria-label={image.alt}
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20" />
          <CarouselNext className="right-4 z-20 carousel-next-button" />
        </Carousel>
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
