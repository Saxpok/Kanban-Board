import { useState } from "react"

import { useAppDispatch, useAppSelector } from "store/store"
import { fetchIssuesThunk, fetchRepoThunk, setStore } from "store/slices/getIssuesSlice"
import CustomInput from "ui/CustomInput/CustomInput"
import Button from "ui/Button/Button"

import "./RepoSearch.style.css"

const RepoSearch = () => {

    const [request, setRequest] = useState('')
    const [lastRequest, setLastRequest] = useState('')
    const [inputMessage, setInputMessage] = useState('Enter repo URL')
    const currentStore = useAppSelector((store) => store.issues)
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
        if (!sessionStorage.getItem(request) && lastRequest) {
            sessionStorage.setItem(lastRequest, JSON.stringify(currentStore))
        }
        setLastRequest(request)
        if (!sessionStorage.getItem(request)) {
            dispatch(fetchIssuesThunk(request))
            dispatch(fetchRepoThunk(request))
        } else {
            dispatch(setStore({newStore: JSON.parse(sessionStorage.getItem(request) as string)}))
        }
    }

    return (
        <div className="RepoSearch">
            <CustomInput 
            placeHolder={inputMessage} 
            changeHandler={getRequest} 
            />
            <Button clickHandler={getRepoData} />
        </div>
    )
}

export default RepoSearch