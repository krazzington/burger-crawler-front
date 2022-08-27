import "./Button.scss";

const Button = (props) => {
  const { title, cname, handlePush } = props;

  return (
    <div className="button__container">
      <button className={cname} onClick={handlePush} type="submit">
        {title}
      </button>
    </div>
  );
};

export default Button;
