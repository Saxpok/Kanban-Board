import React from "react";
import Card from "antd/es/card/Card";

import "./Task.style.css"

interface TaskProps { //move to types
    index: number
    title: string,
    user: string,
    numberOfComments: number,
    issueNumber: number,
    dateOfLastUpdate: string,
    dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void
}

const Task = ({title, index, user, numberOfComments, issueNumber, dateOfLastUpdate, dragEndHandler}: TaskProps) => {

    const calcDaysAgo = () => {
        const now = Date.now()
        const lastDate = Date.parse(dateOfLastUpdate)
        const interval = new Date(now - lastDate)
        return interval.getUTCDate() - 1
    }

    return ( //move to component
        <div 
        draggable={true} 
        className="Task"
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
            e.currentTarget.style.opacity = '50%'
        }}
        onDragEnter={(e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.currentTarget.style.boxShadow = '0 4px 3px gray'
        }}
        onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.opacity = '100%'
        }}
        onDragEnd={dragEndHandler}
        >
            <Card title={title}>
                <p>#{issueNumber} opened {calcDaysAgo()} days ago</p>
                <p>{user} | comments: {numberOfComments}</p>
            </Card>
        </div>
    )
}

export default Task