import React, { useEffect, useState } from "react";
import Tasklist from "../../../ui/taskList/TaskList";
import "./TaskBlock.style.css"
import { store, useAppSelector } from "../../../store/store";

type List = 'open' | 'inProgress' | 'done'

const LISTS: List[] = ['open', 'inProgress', 'done']

const TaskBlock = () => {

    const [currentDropTarget, setCurrentDropTarget] = useState<'open' | 'inProgress' | 'done'>()

    const pickListForDrop = (event: React.DragEvent, stage: 'open' | 'inProgress' | 'done' | undefined) => {
        setCurrentDropTarget(stage)
    }

    const makeTaskLIsts = (types: List[]) => {
        return types.map((item, i) => {
            return (
                <Tasklist onDragOverHandler={(e: React.DragEvent) => pickListForDrop(e, item)} dropTarget={currentDropTarget} key={i} stage={item} title={item}/>  
            )
        })
    }

    return (
        <div  className="TaskBlock">
            {makeTaskLIsts(LISTS)}
        </div>
    )
}

export default TaskBlock