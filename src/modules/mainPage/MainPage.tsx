import { useAppSelector } from "store/store";
import RepoSearch from "modules/mainPage/repoSearch/RepoSearch";
import MainContent from "modules/mainPage/mainContent/MainContent";

import "./MainPage.style.css";

const MainPage = () => {
  const isData = useAppSelector((store) => store.issues.userURL.length);

  return (
    <div className="MainPage">
      <RepoSearch />
      {isData ? <MainContent /> : <div>PLease enter the Repo URL</div>}
    </div>
  );
};

export default MainPage;
