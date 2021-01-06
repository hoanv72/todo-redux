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
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {/* <List>
        <TaskItem />
      </List> */}
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(TaskList);
