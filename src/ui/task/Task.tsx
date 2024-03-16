import React from "react";
import "./Task.style.css"
import Card from "antd/es/card/Card";

interface TaskProps {
    index: number
    title: string,
    user: string,
    numberOfComments: number,
    issueNumber: number,
    dateOfLastUpdate: string,
    dragStartHandler: any,
    //dragEndHandler: any
}

const Task = ({title, index, user, numberOfComments, issueNumber, dateOfLastUpdate, dragStartHandler}: TaskProps) => {

    const calcDaysAgo = () => {
        const now = Date.now()
        const lastDate = Date.parse(dateOfLastUpdate)
        const interval = new Date(now - lastDate)
        return interval.getUTCDate() - 1
    }

    return (
        <div 
        draggable={true} 
        className="Task"
        onDragStart={dragStartHandler}
        onDragOver={(e: any) => {
            e.preventDefault()
            e.currentTarget.style.boxShadow = '0 4px 3px gray'
        }}
        onDragLeave={(e: any) => {
            e.preventDefault()
            e.currentTarget.style.boxShadow = 'none'
        }}
        onDragEnd={(e: any) => {
            e.preventDefault()
            e.currentTarget.style.boxShadow = 'none'
        }}
        >
            <Card title={title}>
                <p>#{issueNumber} opened {calcDaysAgo()} days ago</p>
                <p>{user} | comments: {numberOfComments}</p>
            </Card>
        </div>
    )
}

export default Task