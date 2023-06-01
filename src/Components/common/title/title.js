import "./title.scss";

export const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <p className="form__details--title">{title}</p>
      <p className="form__details--subtitle">{subtitle}</p>
    </div>
  );
};

export default Title;
