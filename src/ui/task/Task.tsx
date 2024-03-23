import React from "react";
import Card from "antd/es/card/Card";

import { TaskProps } from "types/uiPropsTypes/uiPropsTypes";

import "./Task.style.css";

const Task = ({
  title,
  user,
  numberOfComments,
  issueNumber,
  dateOfLastUpdate,
  dragEndHandler,
  dragEnterHandler,
}: TaskProps) => {
  const calcDaysAgo = () => {
    const now = Date.now();
    const lastDate = Date.parse(dateOfLastUpdate);
    const interval = new Date(now - lastDate);
    return interval.getUTCDate() - 1;
  };

  return (
    <div
      draggable={true}
      className="Task"
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = "20%";
        e.currentTarget.style.boxShadow = "4px 6px grey";
      }}
      onDragEnter={dragEnterHandler}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.marginBottom = "9%";
      }}
      onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.opacity = "100%";
        e.currentTarget.style.marginBottom = "3%";
      }}
      onDragEnd={dragEndHandler}
    >
      <Card title={title}>
        <p>
          #{issueNumber} opened {calcDaysAgo()} days ago
        </p>
        <p>
          {user} | comments: {numberOfComments}
        </p>
      </Card>
    </div>
  );
};

export default Task;