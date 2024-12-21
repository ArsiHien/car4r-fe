import { useState } from "react";
import { Steps } from "antd";
import BookingInfo1 from "./BookingInfo1";
import BookingInfo2 from "./BookingInfo2";
import Bill from "./Bill";

const { Step } = Steps;

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);

  const handleStepChange = (newStep: number) => {
    setCurrentStep(newStep);
    setMaxStep(Math.max(maxStep, currentStep));
  };

  const handleNextStep = () => {
    if (currentStep < 2) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setMaxStep(Math.max(maxStep, nextStep));
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BookingInfo1 onNext={handleNextStep} />;
      case 1:
        return (
          <BookingInfo2
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 2:
        return <Bill />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 justify-center">
      <div className="w-4/5 justify-center mx-28">
        <Steps current={currentStep} onChange={handleStepChange}>
          <Step title="Step 1" description="Fill in details" />
          <Step
            title="Step 2"
            description="Confirm booking"
            disabled={maxStep < 1}
          />
          <Step title="Step 3" description="Thank you" disabled={maxStep < 3} />
        </Steps>
      </div>

      <div className="mt-4">{renderStepContent()}</div>
    </div>
  );
};

export default Booking;
