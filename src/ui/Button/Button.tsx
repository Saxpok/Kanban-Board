import { Button as AntButton } from "antd";

import { ButtonProps } from "types/uiPropsTypes/uiPropsTypes";

import "./Button.style.css";

const Button = ({ clickHandler }: ButtonProps) => {
  return (
    <div className="Button">
      <AntButton onClick={clickHandler}>Load Issues</AntButton>
    </div>
  );
};

export default Button;
