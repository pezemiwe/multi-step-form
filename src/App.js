import * as React from "react";
import "./App.scss";
import { ButtonGroup } from "./Components/common/button";
import { StepBox } from "./Components/stepbox";
import { YourInfo } from "./Components/yourInfo";
import { SelectPlan } from "./Components/selectPlan";

function App() {
  const [step, setStep] = React.useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <YourInfo
            children={
              <ButtonGroup
                step={step}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            }
          />
        );
      case 2:
        return (
          <SelectPlan
            children={
              <ButtonGroup
                step={step}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            }
          />
        );
      default:
        return <YourInfo />;
    }
  };

  return (
    <div className="App">
      <StepBox step={step}>{renderStep()}</StepBox>
    </div>
  );
}

export default App;
