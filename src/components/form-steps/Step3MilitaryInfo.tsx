
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Step3MilitaryInfo = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useFormContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Military Personnel Information</h2>
      <p className="text-center mb-8 text-gray-600">
        Please provide details of the military personnel for whom you are requesting leave
      </p>
      
      <div className="space-y-6">
        <div className="grid gap-4">
          <Label htmlFor="militaryName" className="text-gray-700">
            Full Name of Military Personnel
          </Label>
          <Input
            id="militaryName"
            name="militaryName"
            value={formData.militaryName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="militaryId" className="text-gray-700">
            Military ID Number
          </Label>
          <Input
            id="militaryId"
            name="militaryId"
            value={formData.militaryId}
            onChange={handleChange}
            placeholder="Enter military ID number"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="militaryUnit" className="text-gray-700">
            Military Post/Unit
          </Label>
          <Input
            id="militaryUnit"
            name="militaryUnit"
            value={formData.militaryUnit}
            onChange={handleChange}
            placeholder="Enter military post/unit"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="militaryLocation" className="text-gray-700">
            Current Location (Camp, Region)
          </Label>
          <Input
            id="militaryLocation"
            name="militaryLocation"
            value={formData.militaryLocation}
            onChange={handleChange}
            placeholder="Enter current deployment location"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="militaryRank" className="text-gray-700">
            Rank
          </Label>
          <Input
            id="militaryRank"
            name="militaryRank"
            value={formData.militaryRank}
            onChange={handleChange}
            placeholder="Enter military rank"
            className="p-3 border border-gray-300"
            required
          />
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
          disabled={!isStepValid(3)}
          className="bg-unblue hover:bg-unblue-dark text-white font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Step3MilitaryInfo;
