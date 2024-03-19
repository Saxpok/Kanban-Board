import RepoSearch from "./repoSearch/RepoSearch";
import MainContent from "./mainContent/MainContent";

import "./MainPage.style.css"

const MainPage = () => {

    return (
        <div className="MainPage">
            <RepoSearch />
            <MainContent/>
        </div>
    )
}

export default MainPage