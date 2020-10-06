import React, { useState } from "react";

const Form = (props) => {
  const [todoState, setTodoState] = useState();

  const onChange = (e) => {
    e.persist();
    setTodoState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD-TODO", payload: todoState });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">
          ToDo
          <input
            name="todo"
            id="todo"
            type="text"
            onChange={onChange}
            value={todoState}
          ></input>
          <button>Submit</button>
        </label>
      </form>
    </>
  );
};

export default Form;
