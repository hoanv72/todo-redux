import React from "react";
import { connect } from "react-redux";

import TaskItem from "./TaskItem";

const mapStateToProps = (state) => {
  return {
    task: state.taskReducers,
  };
};

function TaskList({ task }) {
  return (
    <React.Fragment>
      <ul>
        {task.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(TaskList);
