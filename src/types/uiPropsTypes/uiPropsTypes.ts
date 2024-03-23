export interface PathProps {
  pathData: {
    path: string;
    userURL: string;
    repoURL: string;
  };
}

export type DragHandler = (e: React.DragEvent<HTMLDivElement>) => void;

export interface ButtonProps {
  clickHandler: () => void;
}

export interface CustomInputProps {
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

export interface TaskProps {
  index: number;
  title: string;
  user: string;
  numberOfComments: number;
  issueNumber: number;
  dateOfLastUpdate: string;
  dragEndHandler: DragHandler;
  dragEnterHandler: DragHandler;
}

export type ColumState = "open" | "inProgress" | "done";

export interface TaskListProps {
  title?: string;
  stage: ColumState;
  dropTarget: ColumState | undefined;
  onDragOverHandler: DragHandler;
}

export interface RatingProps {
  stars: number;
}
