import React from "react";
import "./Task.style.css"
import Card from "antd/es/card/Card";

const Task = () => {
    return (
        <div className="Task">
            <Card title="Some issue title">
                <p>#999 opened 3 days ago</p>
                <p>Admin | comments: 0</p>
            </Card>
        </div>
    )
}

export default Task