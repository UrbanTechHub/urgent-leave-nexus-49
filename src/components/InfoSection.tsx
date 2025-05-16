
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InfoSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Emergency Support Application Process</h2> {/* Updated title to be more generic */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-unblue rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-serif">Submit Application</h3> {/* Updated font */}
              <p className="text-gray-600 font-serif"> {/* Updated font */}
                Complete the multi-step application form with all required information including personnel details and emergency information.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-unblue rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-serif">Application Review</h3> {/* Updated font */}
              <p className="text-gray-600 font-serif"> {/* Updated font */}
                Our emergency response team reviews applications within 24-48 hours based on urgency and operational requirements.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-unblue rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-serif">Approval & Coordination</h3> {/* Updated font */}
              <p className="text-gray-600 font-serif"> {/* Updated font */}
                Upon approval, we coordinate with relevant authorities for authorization and travel arrangements as needed.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 font-serif">Important Information</h3> {/* Updated font */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 font-serif"> {/* Updated font */}
            <li>Applications are processed on a first-come, first-served basis with priority for critical emergencies.</li>
            <li>All information provided must be accurate and verifiable.</li>
            <li>Supporting documentation may be requested during the review process.</li>
            <li>For urgent situations requiring immediate attention, please contact the Emergency Response Center directly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
