import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";
const TaskForm = ({ addTask }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    addTask(data.title);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          name="title"
          placeholder="enter your task"
          style={{
            marginTop: "30px",
            height: "50px",
            outline: "none",
            paddingLeft: "60px",
          }}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (title) => dispatch(addTask(title)),
  };
};
export default connect(null, mapDispatchToProps)(TaskForm);
