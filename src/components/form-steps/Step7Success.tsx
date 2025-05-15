
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const Step7Success = () => {
  const { formData, resetForm } = useFormContext();
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto text-center">
      <div className="flex justify-center mb-8">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Application Submitted Successfully</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your application. Your request has been received and is being processed.
      </p>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
        <h3 className="font-semibold text-lg mb-4 text-center">Application Details</h3>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          <span className="font-medium text-gray-600">Application ID:</span>
          <span className="font-mono bg-gray-100 px-2 py-1 rounded">{formData.applicationId}</span>
          
          <span className="font-medium text-gray-600">Submission Date:</span>
          <span>{new Date().toLocaleDateString()}</span>
          
          <span className="font-medium text-gray-600">Applicant:</span>
          <span>{formData.applicantName}</span>
          
          <span className="font-medium text-gray-600">Military Personnel:</span>
          <span>{formData.militaryName}</span>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded p-4 text-blue-800 text-sm">
          <p className="font-medium mb-2">What happens next?</p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Your application will be reviewed by the Emergency Response Team.</li>
            <li>A decision will typically be made within 24-48 hours.</li>
            <li>You will be contacted via email or phone with the decision.</li>
            <li>If approved, further instructions will be provided.</li>
          </ol>
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-600 mb-4">
          Please save your Application ID for future reference.
        </p>
        <p className="text-gray-600 mb-4">
          For any urgent inquiries, please contact the Emergency Response Center:
        </p>
        <p className="font-medium">
          emergency@un.org | +1-212-555-1212
        </p>
      </div>
      
      <Button 
        onClick={resetForm}
        className="bg-unblue hover:bg-unblue-dark text-white font-medium"
      >
        Submit Another Application
      </Button>
    </div>
  );
};

export default Step7Success;
