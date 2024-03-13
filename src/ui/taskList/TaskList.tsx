import React from "react";
import Task from "../task/Task";
import "./TaskList.style.css"

interface TaskListProps {
    title? : string
}

const TaskList = ({title} : TaskListProps) => {
    return (
        <div className="TaskList">
            <div className="TaskListTitle">{title}</div>
            <div className="TaskContainer">
                <Task />
            </div>
            
        </div>
    )
}

export default TaskList