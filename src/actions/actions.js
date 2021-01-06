import { ADD_TASK } from "../constants/ActionTypes";

export function addTask(title) {
  return {
    type: ADD_TASK,
    title,
  };
}
