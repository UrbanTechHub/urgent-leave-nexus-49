
import React from 'react';
import Header from '@/components/Header';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const EmergencyLeaveForm = () => {
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
          <ApplicationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmergencyLeaveForm;
