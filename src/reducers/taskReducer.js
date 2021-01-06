import { ADD_TASK } from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: uuidv4(),
    title: "hang out with friends",
  },
  {
    id: uuidv4(),
    title: "work out",
  },
];
const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
        },
      ];
    }
    default:
      return state;
  }
};

export default taskReducers;
