import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: uuidv4(),
    title: "hang out with friends",
    isUpdate: true,
  },
  {
    id: uuidv4(),
    title: "work out",
    isUpdate: false,
  },
];
const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK: {
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
          isUpdate: false,
        },
      ];
    }
    case types.REMOVE_TASK: {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
};

export default taskReducers;
