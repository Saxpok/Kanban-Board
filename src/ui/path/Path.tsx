import "./Path.style.css"

interface PathProps { //move to types
    path?: string
}

const Path = ({path}: PathProps) => {

    return (
        <div className="Path">{path}</div>
    )
}

export default Path