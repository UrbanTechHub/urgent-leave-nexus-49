
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step2Eligibility = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormContext();
  
  const handleChange = (value: string) => {
    updateFormData({ relationship: value });
  };
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Eligibility Check</h2>
      <p className="text-center mb-8 text-gray-600">
        Please specify your relationship with the personnel
      </p>
      
      <div className="mb-8">
        <Label htmlFor="relationship" className="text-gray-700 block mb-2">
          What is your relationship with the personnel?
        </Label>
        <Select value={formData.relationship} onValueChange={handleChange}>
          <SelectTrigger className="w-full p-3 border border-gray-300 rounded">
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Husband or Wife (Spouse)">Husband or Wife (Spouse)</SelectItem>
            <SelectItem value="Fiancée or Lover">Fiancée or Lover</SelectItem>
            <SelectItem value="Siblings">Siblings</SelectItem>
            <SelectItem value="Parents">Parents</SelectItem>
            <SelectItem value="Child">Child</SelectItem>
            <SelectItem value="Grandparent">Grandparent</SelectItem>
            <SelectItem value="Extended Family">Extended Family</SelectItem>
            <SelectItem value="Legal Guardian">Legal Guardian</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {formData.relationship && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span className="ml-2 text-green-800">
              You are eligible to apply for emergency leave on behalf of your {formData.relationship.toLowerCase()}.
            </span>
          </div>
        </div>
      )}
      
      <div className="flex justify-between mt-10">
        <Button 
          onClick={prevStep}
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Back
        </Button>
        <Button 
          onClick={nextStep} 
          disabled={!formData.relationship}
          className="bg-unblue hover:bg-unblue-dark text-white font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Step2Eligibility;
