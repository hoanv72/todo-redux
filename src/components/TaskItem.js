import React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { removeTask } from "../actions/actions";
function TaskItem({ item, removeTask }) {
  const handleRemove = (id) => {
    removeTask(id);
  };

  return (
    <React.Fragment>
      <li className="task-item">
        <div>{item.title}</div>
        <DeleteOutlined
          style={{ outline: "none" }}
          onClick={() => handleRemove(item.id)}
        />
      </li>
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
