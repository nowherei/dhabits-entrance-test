import "./icon.css";
import sprite from "../../images/sprite.svg";

const Icon = ({ name }) => {
  return (
    <svg className={"icon icon-" + name}>
      <use href={sprite + "#icon-" + name}></use>
    </svg>
  );
};

export default Icon;
