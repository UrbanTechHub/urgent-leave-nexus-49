
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EMERGENCY_TYPES = [
  "Medical Emergency",
  "Death in the Family",
  "Critical Illness in the Family",
  "Natural Disaster",
  "Legal Emergency",
  "Financial Emergency",
  "Child Care Emergency",
  "Other Emergency"
];

const Step5EmergencyDetails = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useFormContext();
  
  const handleTypeChange = (value: string) => {
    updateFormData({ emergencyType: value });
  };
  
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ emergencyDescription: e.target.value });
  };
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Emergency Details</h2>
      <p className="text-center mb-8 text-gray-600">
        Please provide details about the emergency requiring the leave request
      </p>
      
      <div className="space-y-6">
        <div className="grid gap-4">
          <Label htmlFor="emergencyType" className="text-gray-700">
            Type of Emergency
          </Label>
          <Select value={formData.emergencyType} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-full p-3 border border-gray-300">
              <SelectValue placeholder="Select emergency type" />
            </SelectTrigger>
            <SelectContent>
              {EMERGENCY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="emergencyDescription" className="text-gray-700">
            Description of Emergency
          </Label>
          <Textarea
            id="emergencyDescription"
            value={formData.emergencyDescription}
            onChange={handleDescriptionChange}
            placeholder="Please provide detailed information about the emergency situation"
            className="p-3 border border-gray-300 min-h-[150px]"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            Please provide as much specific information as possible to help expedite the processing of your request.
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
          onClick={nextStep} 
          disabled={!isStepValid(5)}
          className="bg-unblue hover:bg-unblue-dark text-white font-medium"
        >
          Continue to Submit
        </Button>
      </div>
    </div>
  );
};

export default Step5EmergencyDetails;
