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

  //   const handleChange = (e) => {
  //     console.log("handle change!");
  //     props.dispatch({ type: "TOGGLE-COMPLETED", payload: props.state.id });
  //   };
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
      {/* {props.state.map((i) => (
        <div className="todo-container">
          <h3 onClick={handleChange}>{i.item}</h3>
        </div>
      ))} */}
    </>
  );
};

export default Form;
