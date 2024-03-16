import React from "react";
import { Button } from "antd";
import "./RepoButton.style.css"

interface RepoButtonProps {
    clickHandler: () => void
}

const RepoButton = ({clickHandler}: RepoButtonProps) => {
    return (
        <div className="RepoButton">
            <Button onPointerDown={clickHandler}>Load Issues</Button>
        </div>
    )

    }

export default RepoButton