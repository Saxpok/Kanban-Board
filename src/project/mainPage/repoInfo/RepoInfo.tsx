import React from "react";
import Rating from "../../../ui/rating/Rating";
import "./RepoInfo.style.css"
import Path from "../../../ui/path/Path";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../store/store";

const RepoInfo = () => {
    const path = useAppSelector((store) => store.issues.path)
    return (
        <div className="RepoInfo">
            <Path path={path}/>
            <Rating />
        </div>
    )
}

export default RepoInfo