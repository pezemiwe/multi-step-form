import { Title } from "../common/title";
import "./selectPlan.scss";
import Arcade from "../../assets/images/icon-arcade.svg";
import Advanced from "../../assets/images/icon-advanced.svg";
import Pro from "../../assets/images/icon-pro.svg";

export const SelectPlan = ({ children }) => {
  const infos = [
    {
      info: "Name",
      detail: "e.g Stephen King",
    },
    {
      info: "Email Address",
      detail: "e.g stephenking@lorem.com",
    },
    {
      info: "Phone Number",
      detail: "e.g +1 234 567 890",
    },
  ];

  return (
    <div className="plan__details">
      <div className="plan__details--box">
        <Title
          title="Select your plan"
          subtitle="You have the option of yearly or monthly billing."
        />
        <div className="plan__info">
          {infos.map((info) => (
            <div className="plan__info--box">
              <p className="plan__info--names">{info.info}</p>
              <input className="plan__info--name" placeholder={info.detail} />
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default SelectPlan;
