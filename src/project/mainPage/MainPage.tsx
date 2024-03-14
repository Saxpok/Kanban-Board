import React, { useEffect } from "react";
import RepoSearch from "./repoSearch/RepoSearch";
import "./MainPage.style.css"
import RepoInfo from "./repoInfo/RepoInfo";
import TaskBlock from "./taskBlock/TaskBlock";

const request = 'facebook/react'

const MainPage = () => {
    useEffect(() => {
        fetch(`https://api.github.com/repos/${request}/issues`)
            .then((res) => res.json())
            .then(console.log)
    })


    return (
        <div className="MainPage">
            <RepoSearch />
            <RepoInfo />
            <TaskBlock />
        </div>
    )
}

export default MainPage