import Rating from "../../../ui/rating/Rating";
import Path from "../../../ui/path/Path";
import { useAppSelector } from "../../../store/store";

import "./RepoInfo.style.css"

const RepoInfo = () => {

    const repoData = useAppSelector((store) => {
        return {
            pathData: {
                path: store.issues.path,
                userURL: store.issues.userURL,
                repoURL: store.issues.repoURL 
            },
            starsData: store.issues.stars
        }
    })
    
    return (
        <div className="RepoInfo">
            <Path pathData={repoData.pathData}/>
            <Rating stars={repoData.starsData}/>
        </div>
    )
}

export default RepoInfo