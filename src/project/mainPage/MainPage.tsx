import React from "react";
import RepoInput from "../../ui/repoInput/RepoInput";
import RepoButton from "../../ui/repoButton/RepoButton";
import RepoSearch from "./repoSearch/RepoSearch";
import "./MainPage.style.css"
import RepoInfo from "./repoInfo/RepoInfo";
import TaskBlock from "../taskBlock/TaskBlock";


const MainPage = () => {
    return (
        <div className="MainPage">
            <RepoSearch />
            <RepoInfo />
            <TaskBlock />
        </div>
    )
}

export default MainPage