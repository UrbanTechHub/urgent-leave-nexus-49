
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Step1LeaveType = () => {
  const { formData, updateFormData, nextStep } = useFormContext();
  
  const handleSelect = (type: string) => {
    updateFormData({ leaveType: type });
    // Automatically go to the next step when a selection is made
    setTimeout(() => nextStep(), 300);
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 font-serif">Select Leave Type</h2>
      <p className="text-center mb-8 text-gray-600 font-serif">
        Please select the type of leave required for the military personnel
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
        <Card 
          className={`cursor-pointer transition-all ${
            formData.leaveType === 'Short-Term Leave' 
              ? 'border-unblue border-2 shadow-md' 
              : 'border hover:border-gray-300'
          }`}
          onClick={() => handleSelect('Short-Term Leave')}
        >
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-2 font-serif">Short-Term Leave</h3>
            <p className="text-gray-600 mb-4 font-serif">
              For emergency absences of 1-14 days to address urgent family matters
            </p>
            <div className="flex items-center">
              <div className={`h-5 w-5 rounded-full border ${
                formData.leaveType === 'Short-Term Leave' 
                  ? 'bg-unblue border-unblue' 
                  : 'border-gray-400'
              }`}>
                {formData.leaveType === 'Short-Term Leave' && (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <span className="ml-2 text-sm text-gray-600">Select</span>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all ${
            formData.leaveType === 'Long-Term Leave' 
              ? 'border-unblue border-2 shadow-md' 
              : 'border hover:border-gray-300'
          }`}
          onClick={() => handleSelect('Long-Term Leave')}
        >
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-2 font-serif">Long-Term Leave</h3>
            <p className="text-gray-600 mb-4 font-serif">
              For extended absences of 15+ days for serious emergencies or medical needs
            </p>
            <div className="flex items-center">
              <div className={`h-5 w-5 rounded-full border ${
                formData.leaveType === 'Long-Term Leave' 
                  ? 'bg-unblue border-unblue' 
                  : 'border-gray-400'
              }`}>
                {formData.leaveType === 'Long-Term Leave' && (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <span className="ml-2 text-sm text-gray-600">Select</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Step1LeaveType;
