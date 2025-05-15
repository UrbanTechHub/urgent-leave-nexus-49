
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { generateApplicationId } from '@/utils/telegramUtils';

// Define form data type
export type FormData = {
  // Step 1
  leaveType: string;
  // Step 2
  relationship: string;
  // Step 3
  militaryName: string;
  militaryId: string;
  militaryUnit: string;
  militaryLocation: string;
  militaryRank: string;
  // Step 4
  applicantName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  idProof?: File;
  // Step 5
  emergencyType: string;
  emergencyDescription: string;
  // Step 6
  consent: boolean;
  // Generated
  applicationId: string;
  submissionDate?: Date;
};

// Initial form state
const initialFormData: FormData = {
  // Step 1
  leaveType: '',
  // Step 2
  relationship: '',
  // Step 3
  militaryName: '',
  militaryId: '',
  militaryUnit: '',
  militaryLocation: '',
  militaryRank: '',
  // Step 4
  applicantName: '',
  email: '',
  phone: '',
  country: '',
  address: '',
  // Step 5
  emergencyType: '',
  emergencyDescription: '',
  // Step 6
  consent: false,
  // Generated
  applicationId: generateApplicationId(),
};

// Form context type
type FormContextType = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isStepValid: (step: number) => boolean;
  resetForm: () => void;
  setIdProofFile: (file: File | undefined) => void;
};

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Form provider component
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  // Update form data
  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Go to next step
  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Go to specific step
  const goToStep = (step: number) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step);
    }
  };

  // Set ID proof file
  const setIdProofFile = (file: File | undefined) => {
    setFormData(prev => ({ ...prev, idProof: file }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      ...initialFormData,
      applicationId: generateApplicationId(), // Generate new ID
    });
    setCurrentStep(1);
  };

  // Check if current step is valid
  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.leaveType;
      case 2:
        return !!formData.relationship;
      case 3:
        return !!formData.militaryName &&
               !!formData.militaryId &&
               !!formData.militaryUnit &&
               !!formData.militaryLocation &&
               !!formData.militaryRank;
      case 4:
        return !!formData.applicantName &&
               !!formData.email &&
               !!formData.phone &&
               !!formData.country &&
               !!formData.address;
      case 5:
        return !!formData.emergencyType &&
               !!formData.emergencyDescription;
      case 6:
        return formData.consent === true;
      default:
        return false;
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        isStepValid,
        resetForm,
        setIdProofFile,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use form context
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
