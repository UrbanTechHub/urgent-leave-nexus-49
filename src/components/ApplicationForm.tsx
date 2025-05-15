
import React from 'react';
import { FormProvider } from '@/contexts/FormContext';
import FormStepIndicator from './FormStepIndicator';
import Step1LeaveType from './form-steps/Step1LeaveType';
import Step2Eligibility from './form-steps/Step2Eligibility';
import Step3MilitaryInfo from './form-steps/Step3MilitaryInfo';
import Step4ApplicantInfo from './form-steps/Step4ApplicantInfo';
import Step5EmergencyDetails from './form-steps/Step5EmergencyDetails';
import Step6Consent from './form-steps/Step6Consent';
import Step7Success from './form-steps/Step7Success';
import { useFormContext } from '@/contexts/FormContext';

const FormSteps = () => {
  const { currentStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1LeaveType />;
      case 2:
        return <Step2Eligibility />;
      case 3:
        return <Step3MilitaryInfo />;
      case 4:
        return <Step4ApplicantInfo />;
      case 5:
        return <Step5EmergencyDetails />;
      case 6:
        return <Step6Consent />;
      case 7:
        return <Step7Success />;
      default:
        return <Step1LeaveType />;
    }
  };

  return (
    <div className="w-full">
      {currentStep < 7 && <FormStepIndicator />}
      {renderStep()}
    </div>
  );
};

const ApplicationForm = () => {
  return (
    <div id="application-form" className="bg-white py-12 px-4 md:px-8 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-800">
        Emergency Leave Application
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Complete the form below to request emergency leave for UN military personnel
      </p>
      
      <FormProvider>
        <FormSteps />
      </FormProvider>
    </div>
  );
};

export default ApplicationForm;
