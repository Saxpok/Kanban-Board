import Rating from "../../../ui/rating/Rating";
import Path from "../../../ui/path/Path";
import { useAppSelector } from "../../../store/store";

import "./RepoInfo.style.css"

const RepoInfo = () => {

    const path = useAppSelector((store) => store.issues.path)
    
    return (
        <div className="RepoInfo">
            <Path path={path}/>
            <Rating />
        </div>
    )
}

export default RepoInfo