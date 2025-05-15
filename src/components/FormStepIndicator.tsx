
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { cn } from '@/lib/utils';

const steps = [
  { number: 1, label: 'Leave Type' },
  { number: 2, label: 'Eligibility' },
  { number: 3, label: 'Personnel Info' },
  { number: 4, label: 'Applicant Info' },
  { number: 5, label: 'Emergency Details' },
  { number: 6, label: 'Submit' },
];

const FormStepIndicator = () => {
  const { currentStep, goToStep, isStepValid } = useFormContext();

  // Allow clicking only on steps that have been completed or the current step
  const handleStepClick = (step: number) => {
    if (step <= currentStep || isStepValid(currentStep)) {
      goToStep(step);
    }
  };

  return (
    <div className="w-full mb-8">
      {/* Visible on desktop */}
      <div className="hidden md:flex justify-between items-center px-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step indicator */}
            <div 
              onClick={() => handleStepClick(step.number)}
              className={cn(
                "flex flex-col items-center cursor-pointer",
                step.number < currentStep && "text-unblue",
                step.number === currentStep && "text-unblue-dark font-bold",
                step.number > currentStep && "text-gray-400"
              )}
            >
              <div 
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-full border-2 mb-2",
                  step.number < currentStep && "bg-unblue border-unblue text-white",
                  step.number === currentStep && "bg-white border-unblue-dark text-unblue-dark",
                  step.number > currentStep && "bg-white border-gray-300 text-gray-400"
                )}
              >
                {step.number}
              </div>
              <span className="text-sm whitespace-nowrap">{step.label}</span>
            </div>

            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "h-1 flex-grow mx-2",
                  step.number < currentStep ? "bg-unblue" : "bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Simplified version for mobile */}
      <div className="md:hidden flex items-center justify-center">
        <span className="text-lg font-medium text-unblue">
          Step {currentStep} of 6: {steps[currentStep - 1]?.label}
        </span>
      </div>
    </div>
  );
};

export default FormStepIndicator;
