import React from "react";
import Rating from "../../../ui/rating/Rating";
import "./RepoInfo.style.css"
import Path from "../../../ui/path/Path";

const RepoInfo = () => {
    return (
        <div className="RepoInfo">
            <Path />
            <Rating />
        </div>
    )
}

export default RepoInfo