import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "store/store";
import { addIssue, orderIssue, removeIssue } from "store/slices/getIssuesSlice";
import Task from "ui/task/Task";
import { TaskListProps } from "types/uiPropsTypes/uiPropsTypes";
import { TaskInterface } from "types/responseTypes/responseTypes";

import "./TaskList.style.css";

const TaskList = ({
  title,
  stage,
  dropTarget,
  onDragOverHandler,
}: TaskListProps) => {
  const [currentDropIndex, setCurrentDropIndex] = useState(0);

  const dispatch = useAppDispatch();

  const pickCurrentDropIndex = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setCurrentDropIndex(index);
  };

  function drag(
    event: React.DragEvent<HTMLDivElement>,
    item: TaskInterface,
    i: number
  ) {
    if (stage !== dropTarget) {
      dispatch(
        addIssue({
          task: item,
          targetState: dropTarget,
          dropIndex: currentDropIndex,
        })
      );
      dispatch(removeIssue({ task: item, taskState: stage, index: i }));
    } else {
      dispatch(
        orderIssue({
          task: item,
          targetState: dropTarget,
          dropIndex: currentDropIndex,
          index: i,
        })
      );
    }
  }

  const fetchedTasks = useAppSelector((store) => store.issues.data[stage]);

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
          dateOfLastUpdate={item.updated_at ? item.updated_at : item.created_at}
          dragEndHandler={(e: React.DragEvent<HTMLDivElement>) =>
            drag(e, item, i)
          }
          dragEnterHandler={(e: React.DragEvent<HTMLDivElement>) =>
            pickCurrentDropIndex(e, i)
          }
        />
      );
    });
  };

  return (
    <div onDragOver={onDragOverHandler} className="TaskList">
      <div className="TaskListTitle">{title}</div>
      <div className="TaskContainer">{showTasks()}</div>
    </div>
  );
};

export default TaskList;
