import React from "react";
import "./RepoSearch.style.css"
import RepoInput from "../../../ui/repoInput/RepoInput";
import RepoButton from "../../../ui/repoButton/RepoButton";

const RepoSearch = () => {
    return (
        <div className="RepoSearch">
            <RepoInput />
            <RepoButton />
        </div>
    )
}

export default RepoSearch