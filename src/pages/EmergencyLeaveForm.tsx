
import React from 'react';
import Header from '@/components/Header';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const EmergencyLeaveForm = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-16 flex-grow">
        <div className="container mx-auto px-4 py-16">
          <ApplicationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmergencyLeaveForm;
