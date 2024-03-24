import { Input } from "antd";

import { CustomInputProps } from "types/uiPropsTypes/uiPropsTypes";

import "./CustomInput.style.css";

const CustomInput = ({ changeHandler, placeHolder }: CustomInputProps) => {
  return (
    <div className="CustomInput">
      <Input data-testid='input' onChange={changeHandler} placeholder={placeHolder}></Input>
    </div>
  );
};

export default CustomInput;
