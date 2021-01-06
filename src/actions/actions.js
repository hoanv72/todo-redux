import * as types from "../constants/ActionTypes";

export { addTask, removeTask };

function addTask(title) {
  return {
    type: types.ADD_TASK,
    title,
  };
}

function removeTask(id) {
  return {
    type: types.REMOVE_TASK,
    id,
  };
}
