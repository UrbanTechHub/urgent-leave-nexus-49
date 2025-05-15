
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
    url: '/lovable-uploads/f931d0f8-2b05-4bc3-acae-f70e235f5a74.png',
    alt: 'Military personnel interacting with local civilians',
  },
  {
    url: '/lovable-uploads/ddf73e06-5f6a-4a70-8968-4638ca11f964.png',
    alt: 'Soldier providing aid to children',
  },
  {
    url: '/lovable-uploads/784eef9c-146d-4844-8f42-20b54b784d6e.png',
    alt: 'Portrait of a soldier in the field',
  },
  {
    url: '/lovable-uploads/218f7bda-28da-47a7-8cdc-f3b05fb75f29.png',
    alt: 'Soldier assisting with humanitarian aid supplies',
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
