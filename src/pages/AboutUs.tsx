
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

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
                  src="https://www.un.org/sites/un2.un.org/files/field/image/un-peacekeeping-header.jpg" 
                  alt="UN Peacekeeping Forces" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-serif">Our Mission</h2>
                <p className="text-gray-700 mb-4 font-serif">
                  The United Nations Emergency Leave Application Center is dedicated to supporting military 
                  personnel serving in UN peacekeeping and humanitarian missions worldwide. Our mission is to provide 
                  efficient and compassionate processing of emergency leave requests, ensuring that those who serve 
                  can return home when family emergencies arise.
                </p>
                <p className="text-gray-700 font-serif">
                  Established in 2015, our center has processed over 10,000 emergency leave applications, 
                  helping military personnel from over 120 countries return to their families during times of need.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center font-serif">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Short-Term Leave</h3>
                  <p className="text-gray-700 font-serif">
                    Expedited processing of emergency leave requests for periods of 1-14 days for urgent family matters.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Long-Term Leave</h3>
                  <p className="text-gray-700 font-serif">
                    Comprehensive processing of extended leave requests for periods of 15 days or more for serious emergencies.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-3 font-serif">Travel Assistance</h3>
                  <p className="text-gray-700 font-serif">
                    Coordination with transportation and logistics teams to facilitate rapid return travel for approved leave requests.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center font-serif">Our Team</h2>
              <p className="text-gray-700 mb-6 text-center font-serif">
                Our dedicated staff includes military liaison officers, humanitarian specialists, and 
                logistics coordinators working around the clock to process emergency leave applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857" 
                    alt="Team Member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-medium font-serif">Col. James Wilson</h4>
                  <p className="text-gray-600 font-serif">Director of Operations</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="Team Member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-medium font-serif">Dr. Sarah Ahmed</h4>
                  <p className="text-gray-600 font-serif">Humanitarian Affairs Coordinator</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                    alt="Team Member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-medium font-serif">Maj. Robert Chen</h4>
                  <p className="text-gray-600 font-serif">Military Liaison Officer</p>
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
