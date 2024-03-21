import React, { useState } from "react";

import RepoButton from "../../../ui/Button/Button";
import { useAppDispatch } from "../../../store/store";
import { fetchIssuesThunk, fetchRepoThunk } from "../../../store/slices/getIssuesSlice";
import CustomInput from "../../../ui/CustomInput/CustomInput";

import "./RepoSearch.style.css"

const RepoSearch = () => {

    const [request, setRequest] = useState('')
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
            <CustomInput 
            placeHolder={inputMessage} 
            changeHandler={getRequest} 
            />
            <RepoButton clickHandler={getRepoData} />
        </div>
    )
}

export default RepoSearch