import React from "react";
import "./Path.style.css"

interface PathProps {
    path?: string
}

const Path = ({path}: PathProps) => {
    return (
        <div className="Path">{path}</div>
    )
}

export default Path