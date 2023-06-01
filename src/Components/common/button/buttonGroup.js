import "./button.scss";
import { Button } from ".";

export const ButtonGroup = ({ step, handleBack, handleNext }) => (
  <div className={step > 1 ? "button__group" : "button__group--single"}>
    {step > 1 && (
      <Button type="--outline" label="Go Back" onClick={handleBack} />
    )}
    {step < 4 && <Button label="Next Steps" onClick={handleNext} />}
  </div>
);

export default ButtonGroup;
