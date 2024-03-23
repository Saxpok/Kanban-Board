import { LoadingOutlined } from "@ant-design/icons";

import { useAppSelector } from "store/store";
import RepoInfo from "modules/mainPage/repoInfo/RepoInfo";
import TaskBlock from "modules/mainPage/taskBlock/TaskBlock";

const MainContent = () => {
  const isLoading = useAppSelector((store) => store.issues.isLoading);
  const isData = useAppSelector((store) => store.issues.userURL.length);

  return !isLoading && !isData ? (
    <LoadingOutlined />
  ) : (
    <>
      <RepoInfo />
      <TaskBlock />
    </>
  );
};

export default MainContent;
