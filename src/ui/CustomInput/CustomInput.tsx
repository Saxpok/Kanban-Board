import  Input from "antd/es/input/Input";

import { CustomInputProps } from "types/uiPropsTypes/uiPropsTypes";

import "./CustomInput.style.css"

const CustomInput = ({changeHandler, placeHolder}: CustomInputProps) => {

    return (
        <div className="CustomInput">
            <Input onChange={changeHandler} placeholder={placeHolder}></Input>
        </div>
    )
}

export default CustomInput