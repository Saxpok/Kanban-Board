import RepoInfo from "../repoInfo/RepoInfo";
import TaskBlock from "../taskBlock/TaskBlock";

import { useAppSelector } from "../../../store/store";
import { LoadingOutlined } from "@ant-design/icons";

const MainContent = () => {

  const isLoading = useAppSelector((store) => store.issues.isLoading)
  const isData = useAppSelector((store) => store.issues.userURL.length)
  
  return (
    (!isLoading && !isData)?
      <LoadingOutlined /> :
      <>
        <RepoInfo />
        <TaskBlock />
      </>
  )
}

export default MainContent