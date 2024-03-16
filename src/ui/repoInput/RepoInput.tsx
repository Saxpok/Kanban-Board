import Input from "antd/es/input/Input";
import React from "react";
import "./RepoInput.style.css"

interface RepoInputProps {
    changeHandler?: (event: React.ChangeEvent) => void
}

const RepoInput = ({changeHandler}: RepoInputProps) => {
    return (
        <div className="RepoInput">
            <Input onChange={changeHandler} placeholder="Enter repo URL"></Input>
        </div>
    )
}

export default RepoInput