import React, { useState } from "react";
import Task from "../task/Task";
import "./TaskList.style.css"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { TaskInterface } from "../../types";
import { removeIssue } from "../../store/slices/getIssuesSlice";


interface TaskListProps {
    title? : string,
    stage : string,
    fetchedTasks : TaskInterface[],
}

const TaskList = ({title, stage, fetchedTasks} : TaskListProps) => {

    const dispach = useAppDispatch()

    function remove (event: React.DragEvent, item: TaskInterface)  {
        dispach(removeIssue({task: item, taskState: stage}))
    }
    
    const showTasks = () => {
        return fetchedTasks.map((item: TaskInterface, i: number) => {
            
            if(item.state === stage)
            return (
                <Task 
                key={item.id}
                index={i}
                title={item.title}
                user={item.user.login}
                numberOfComments={item.comments}
                issueNumber={item.number}
                dateOfLastUpdate={item.updated_at? item.updated_at : item.created_at}
                dragStartHandler={(e: React.DragEvent) => remove(e, item)}
                />
            )
        })
    }

    return (
        <div className="TaskList">
            <div className="TaskListTitle">{title}</div>
            <div className="TaskContainer">
                {showTasks()}
            </div>
            
        </div>
    )
}

export default TaskList