import React from "react";
import Tasklist from "../../../ui/taskList/TaskList";
import "./TaskBlock.style.css"

const TaskBlock = () => {
    return (
        <div className="TaskBlock">
            <Tasklist title="To Do"/>
            <Tasklist title="In Progress"/>
            <Tasklist title="Done"/>
        </div>
    )
}

export default TaskBlock