import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ImageSlideshow from '@/components/ImageSlideshow';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-14"> {/* Add padding to account for fixed header */}
        <HeroSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">For Individuals and Families in Need</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/2671e683-796d-4902-8463-e2c70e16f889.png" // Updated image
                  alt="Medical professionals caring for a child in a wheelchair" // Updated alt text
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Supporting Those Who Need Assistance</h3>
                <p className="text-gray-700 mb-6 font-serif">
                  The United Nations recognizes the importance of family support for individuals involved in peacekeeping and humanitarian missions across the globe. Our Emergency Support program ensures that in times of crisis, individuals can return home to address urgent family matters.
                </p>
                <p className="text-gray-700 mb-6 font-serif">
                  Whether it's a medical emergency, bereavement, or other critical situation, we provide expedited processing of requests to ensure prompt responses to family needs.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 font-serif">Eligible Circumstances Include:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-serif">
                    <li>Death or critical illness of an immediate family member</li>
                    <li>Medical emergencies requiring the presence of the individual</li>
                    <li>Natural disasters affecting family residence</li>
                    <li>Other humanitarian circumstances evaluated on a case-by-case basis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ImageSlideshow />
        
        <InfoSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Apply?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-serif">
              Our streamlined application process makes it easy to request emergency support for individuals serving in UN missions.
            </p>
            <Button 
              asChild
              className="bg-unblue hover:bg-unblue-dark text-white px-8 py-6 text-lg font-serif"
            >
              <Link to="/apply">Apply for Emergency Support</Link>
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
