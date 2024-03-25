import React, { useCallback } from "react";

import { Card } from "antd";
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

  const dragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = "20%";
    e.currentTarget.style.boxShadow = "4px 6px grey";
  }, []);

  const dragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.marginBottom = "9%";
  }, []);

  const dragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.opacity = "100%";
    e.currentTarget.style.marginBottom = "3%";
  }, []);

  return (
    <div
      draggable={true}
      className="Task"
      onDragStart={dragStart}
      onDragEnter={dragEnterHandler}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
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
