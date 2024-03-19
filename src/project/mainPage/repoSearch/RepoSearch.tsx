import React, { ChangeEventHandler, useState } from "react";
import "./RepoSearch.style.css"
import RepoInput from "../../../ui/repoInput/RepoInput";
import RepoButton from "../../../ui/repoButton/RepoButton";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchIssuesThunk, fetchRepoThunk } from "../../../store/slices/getIssuesSlice";

const RepoSearch = () => {
    const [request, setRequest] = useState('facebook/react')
    const dispatch = useAppDispatch()

    const getRequest = (event: any) => {
        if (event.target){
            setRequest(event.target.value)
        }
    }

    const getRepoData = async() => {
        dispatch(fetchIssuesThunk(request))
        //dispatch(fetchRepoThunk(request))
    }

    return (
        <div className="RepoSearch">
            <RepoInput changeHandler={getRequest} />
            <RepoButton clickHandler={getRepoData} />
        </div>
    )
}

export default RepoSearch