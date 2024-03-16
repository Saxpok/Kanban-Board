import React, { useEffect, useState } from "react";
import Tasklist from "../../../ui/taskList/TaskList";
import "./TaskBlock.style.css"
import { store, useAppSelector } from "../../../store/store";



const TaskBlock = () => {

    const fetchedTasks = useAppSelector((store) => store.issues.data)
    
    return (
        <div className="TaskBlock">
            <Tasklist fetchedTasks={fetchedTasks.open} stage="open" title="To Do"/>
            <Tasklist fetchedTasks={fetchedTasks.inProgress} stage="inProgress" title="In Progress"/>
            <Tasklist fetchedTasks={fetchedTasks.done} stage="closed" title="Done"/>
        </div>
    )
}

export default TaskBlock