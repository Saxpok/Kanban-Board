import React, { ChangeEventHandler, useState } from "react";

import RepoInput from "../../../ui/repoInput/RepoInput";
import RepoButton from "../../../ui/repoButton/RepoButton";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchIssuesThunk, fetchRepoThunk } from "../../../store/slices/getIssuesSlice";

import "./RepoSearch.style.css"

const RepoSearch = () => {

    const [request, setRequest] = useState('facebook/react')
    const [inputMessage, setInputMessage] = useState('Enter repo URL')
    const dispatch = useAppDispatch()

    const getRequest = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target) {
            const splitArray = event.target.value.split('/')
            const repoPath = splitArray[splitArray.length - 2]
            + '/' + splitArray[splitArray.length - 1]
            setRequest(repoPath)
        }
    }

    const getRepoData = async() => {
        if(request) {
            dispatch(fetchIssuesThunk(request))
            dispatch(fetchRepoThunk(request))
        } else {
            setInputMessage('Please enter valid URL')
        }
    }

    return (
        <div className="RepoSearch">
            <RepoInput 
            placeHolder={inputMessage} 
            changeHandler={getRequest} 
            />
            <RepoButton clickHandler={getRepoData} />
        </div>
    )
}

export default RepoSearch