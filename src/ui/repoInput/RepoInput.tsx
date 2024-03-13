import Input from "antd/es/input/Input";
import React from "react";
import "./RepoInput.style.css"

const RepoInput = () => {
    return (
        <div className="RepoInput">
            <Input placeholder="Enter repo URL"></Input>
        </div>
    )
}

export default RepoInput