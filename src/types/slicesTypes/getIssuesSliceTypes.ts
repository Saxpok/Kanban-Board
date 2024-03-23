import { TaskInterface } from "types/responseTypes/responseTypes";

export interface InitialState {
  data: {
    open: TaskInterface[];
    inProgress: TaskInterface[];
    done: TaskInterface[];
  };
  stars: number;
  userURL: string;
  repoURL: string;
  isLoading: boolean;
  path: string;
}
