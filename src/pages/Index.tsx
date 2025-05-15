
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ApplicationForm from '@/components/ApplicationForm';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-14"> {/* Add padding to account for fixed header */}
        <HeroSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">For Military Personnel and Families</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                  alt="Military Personnel" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Supporting Those Who Serve</h3>
                <p className="text-gray-700 mb-6">
                  The United Nations recognizes the importance of family support for our military personnel deployed in peacekeeping and humanitarian missions across the globe. Our Emergency Leave program ensures that in times of crisis, personnel can return home to address urgent family matters.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether it's a medical emergency, bereavement, or other critical situation, we provide expedited processing of leave requests to ensure prompt responses to family needs.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Eligible Circumstances Include:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Death or critical illness of an immediate family member</li>
                    <li>Medical emergencies requiring the presence of military personnel</li>
                    <li>Natural disasters affecting family residence</li>
                    <li>Other humanitarian circumstances evaluated on a case-by-case basis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <InfoSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ApplicationForm />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
