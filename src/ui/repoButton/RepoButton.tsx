import { Button } from "antd";

import "./RepoButton.style.css"

interface RepoButtonProps {
    clickHandler: () => void
}

const RepoButton = ({clickHandler}: RepoButtonProps) => { //rename

    return (
        <div className="RepoButton">
            <Button onPointerDown={clickHandler}>Load Issues</Button>
        </div>
    )

    }

export default RepoButton