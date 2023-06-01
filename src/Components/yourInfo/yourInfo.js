import { Title } from "../common/title";
import "./yourInfo.scss";

export const YourInfo = ({ children }) => {
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
    <div className="form__details">
      <div className="form__details--box">
        <Title
          title="Personal info"
          subtitle="Please provide your name, email address and phone number."
        />
        <div className="form__info">
          {infos.map((info) => (
            <div className="form__info--box">
              <p className="form__info--names">{info.info}</p>
              <input className="form__info--name" placeholder={info.detail} />
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default YourInfo;
