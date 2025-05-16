import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const slideImages = [
  {
    url: '/lovable-uploads/bb7d5543-d8fd-46b1-b0ce-eb286007e85a.png',
    alt: 'UNHCR tent in a refugee camp, a child visible at the entrance',
  },
  {
    url: '/lovable-uploads/2671e683-796d-4902-8463-e2c70e16f889.png',
    alt: 'Medical professionals caring for a child in a wheelchair in a hospital corridor',
  },
  {
    url: '/lovable-uploads/3c4f8ae9-a85d-4f01-ac98-0e1edee0ad25.png',
    alt: 'Diverse medical team in discussion in a hospital hallway',
  },
  {
    url: '/lovable-uploads/39dceadb-f478-4230-93d4-c94da347bebc.png',
    alt: 'Aid worker engaging with a group of smiling children outdoors',
  },
  {
    url: '/lovable-uploads/f063641f-158e-4c7f-9c6a-3fb072d85417.png',
    alt: 'Medical personnel in full PPE attending to a patient at an outdoor clinic setup',
  },
  {
    url: '/lovable-uploads/edd663fb-088c-44e5-90e4-bda1331343a7.png',
    alt: 'Close-up of a healthcare worker in PPE administering a vaccine to an elderly person',
  },
];

const ImageSlideshow = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Humanitarian Efforts in Action</h2>
        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <Carousel
            opts={{ 
              loop: true,
              dragFree: false,
              skipSnaps: false,
              align: "center"
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {slideImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-1 h-full">
                    <AspectRatio ratio={16 / 9} className="overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </AspectRatio>
                    <p className="text-center mt-3 text-md text-gray-700 font-serif">{image.alt}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-[-20px] md:ml-[-40px] bg-white/80 hover:bg-white text-gray-800" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-[-20px] md:mr-[-40px] bg-white/80 hover:bg-white text-gray-800" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;
