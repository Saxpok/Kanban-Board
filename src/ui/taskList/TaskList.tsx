import React, { useEffect, useState } from "react";

import Task from "../task/Task";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { TaskInterface } from "../../types";
import { addIssue, removeIssue } from "../../store/slices/getIssuesSlice";

import "./TaskList.style.css"


interface TaskListProps { //move to types
    title?: 'open' | 'inProgress' | 'done'
    stage: 'open' | 'inProgress' | 'done',
    dropTarget: 'open' | 'inProgress' | 'done' | undefined,
    onDragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void
}

const TaskList = ({title, stage, dropTarget, onDragOverHandler} : TaskListProps) => {

    const dispatch = useAppDispatch()

    function drag (event: React.DragEvent<HTMLDivElement>, item: TaskInterface)  {
        if(stage !== dropTarget) {
        dispatch(addIssue({task: item, targetState: dropTarget}))
        dispatch(removeIssue({task: item, taskState: stage}))
        }
    }
    
    const fetchedTasks = useAppSelector((store) => store.issues.data[stage])

    const showTasks = () => {
        return fetchedTasks.map((item: TaskInterface, i: number) => {
            return (
                <Task 
                key={item.id}
                index={i}
                title={item.title}
                user={item.user.login}
                numberOfComments={item.comments}
                issueNumber={item.number}
                dateOfLastUpdate={item.updated_at? item.updated_at : item.created_at}
                dragEndHandler={(e: React.DragEvent<HTMLDivElement>) => drag(e, item)}
                />
            )
        })
    }

    return (
        <div onDragOver={onDragOverHandler} className="TaskList">
            <div className="TaskListTitle">{title}</div>
            <div className="TaskContainer">
                {showTasks()}
            </div>
        </div>
    )
}

export default TaskList