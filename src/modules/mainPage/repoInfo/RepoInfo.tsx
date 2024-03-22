import { useAppSelector } from "store/store"
import Rating from "ui/rating/Rating"
import Path from "ui/path/Path"

import "./RepoInfo.style.css"

const RepoInfo = () => {

    const repoStatus = useAppSelector((store) => store.issues)
    
    return (
        <div className="RepoInfo">
            <Path pathData={{
                path: repoStatus.path, 
                userURL: repoStatus.userURL, 
                repoURL: repoStatus.repoURL}}/>
            <Rating stars={repoStatus.stars}/>
        </div>
    )
}

export default RepoInfo