
import React from 'react';
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
    url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    alt: 'Military medical personnel in a humanitarian mission'
  },
  {
    url: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    alt: 'Medical workers in refugee camp'
  },
  {
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    alt: 'Humanitarian aid workers in the field'
  }
];

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      
      {/* Slideshow */}
      <div className="absolute inset-0">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {slideImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <AspectRatio ratio={16/9} className="h-full">
                  <div 
                    className="w-full h-full bg-cover bg-center"
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
          <CarouselNext className="right-4 z-20" />
        </Carousel>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-white z-20">
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
