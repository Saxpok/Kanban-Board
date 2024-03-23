import { PathProps } from "types/uiPropsTypes/uiPropsTypes";

import "./Path.style.css";

const Path = ({ pathData }: PathProps) => {
  const splitedPath = pathData.path.split("/");

  return (
    <div className="Path">
      <a style={{ textDecoration: "none" }} href={pathData.userURL}>
        {splitedPath[0]}
      </a>
      /
      <a style={{ textDecoration: "none" }} href={pathData.repoURL}>
        {splitedPath[1]}
      </a>
    </div>
  );
};

export default Path;
