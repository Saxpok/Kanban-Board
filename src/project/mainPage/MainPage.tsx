import React, { useEffect } from "react";
import RepoSearch from "./repoSearch/RepoSearch";
import "./MainPage.style.css"
import RepoInfo from "./repoInfo/RepoInfo";
import TaskBlock from "./taskBlock/TaskBlock";
import { store, useAppSelector } from "../../store/store";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";

const MainPage = () => {

    const isLoading = useAppSelector((store) => store.issues.isLoading)
    
    return (
        <div className="MainPage">
            <RepoSearch />
            {isLoading?
             <LoadingOutlined />:
            <> 
              <RepoInfo />
              <TaskBlock/> 
            </>
            }   
        </div>
    )
}

export default MainPage