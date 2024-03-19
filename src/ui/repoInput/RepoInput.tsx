import React from "react";
import Input from "antd/es/input/Input";

import "./RepoInput.style.css"

interface RepoInputProps { //move to types
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeHolder?: string
}

const RepoInput = ({changeHandler, placeHolder}: RepoInputProps) => {

    return (
        <div className="RepoInput">
            <Input onChange={changeHandler} placeholder={placeHolder}></Input>
        </div>
    )
}

export default RepoInput