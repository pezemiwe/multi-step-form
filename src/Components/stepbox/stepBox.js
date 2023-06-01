import "./stepBox.scss";

const details = [
  {
    num: 1,
    step: "STEP 1",
    text: "YOUR INFO",
  },
  {
    num: 2,
    step: "STEP 2",
    text: "SELECT PLAN",
  },
  {
    num: 3,
    step: "STEP 3",
    text: "ADD-ONS",
  },
  {
    num: 4,
    step: "STEP 4",
    text: "SUMMARY",
  },
];

export const StepBox = ({ children, step }) => {
  return (
    <div className="form">
      <div className="form__steps">
        {details.map((detail, index) => (
          <div className="form__steps--step" key={index}>
            <div
              className={
                step === detail.num
                  ? "form__steps--num--active"
                  : "form__steps--num"
              }
            >
              {detail.num}
            </div>
            <div className="form__steps--text">
              <div className="form__steps--regular">{detail.step}</div>
              <div className="form__steps--bold">{detail.text}</div>
            </div>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
};

export default StepBox;
