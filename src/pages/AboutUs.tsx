import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-16 flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-unblue hover:text-unblue-dark"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center font-serif">About Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="/lovable-uploads/3c4f8ae9-a85d-4f01-ac98-0e1edee0ad25.png" 
                  alt="Medical team discussing a case in a hospital corridor" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-serif">Our Mission</h2>
                <p className="text-gray-700 mb-4 font-serif">
                  The United Nations Emergency Support Center is dedicated to supporting individuals 
                  serving in UN peacekeeping and humanitarian missions worldwide. Our mission is to provide 
                  efficient and compassionate processing of emergency support requests, ensuring that those who serve 
                  can return home when family emergencies arise.
                </p>
                <p className="text-gray-700 font-serif">
                  Established in 2015, our center has processed over 10,000 emergency applications, 
                  helping individuals from over 120 countries return to their families during times of need.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center font-serif">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Short-Term Support</h3>
                  <p className="text-gray-700 font-serif">
                    Expedited processing of emergency requests for periods of 1-14 days for urgent family matters.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Long-Term Support</h3>
                  <p className="text-gray-700 font-serif">
                    Comprehensive processing of extended requests for periods of 15 days or more for serious emergencies.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Travel Assistance</h3>
                  <p className="text-gray-700 font-serif">
                    Coordination with transportation and logistics teams to facilitate rapid return travel for approved requests.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
