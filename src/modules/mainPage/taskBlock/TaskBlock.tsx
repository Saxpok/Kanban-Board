import { useState } from "react";

import { ColumState } from "types/uiPropsTypes/uiPropsTypes";
import TaskList from "ui/taskList/TaskList";

import "./TaskBlock.style.css"

const LISTS: ColumState[] = ['open', 'inProgress', 'done']
const COLUM_NAMES: string[] = ['To Do', 'In Progress', 'Done']

const TaskBlock = () => {

    const [currentDropTarget, setCurrentDropTarget] = useState<ColumState>()

    const pickListForDrop = (event: React.DragEvent, stage: ColumState | undefined) => {
        setCurrentDropTarget(stage)
    }

    const makeTaskLIsts = (types: ColumState[]) => {
        return types.map((item, i) => {
            return (
                <TaskList
                onDragOverHandler={(e: React.DragEvent) => pickListForDrop(e, item)} 
                dropTarget={currentDropTarget} 
                key={i} 
                stage={item} 
                title={COLUM_NAMES[i]}
                />  
            )
        })
    }

    return (
        <div className="TaskBlock">
            {makeTaskLIsts(LISTS)}
        </div>
    )
}

export default TaskBlock