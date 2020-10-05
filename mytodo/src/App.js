import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  const [todoState, setTodoState] = useState();

  const onChange = (e) => {
    e.persist();
    setTodoState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", payload: todoState });
  };

  const handleChange = (e) => {};

  return (
    <div className="App">
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
      {state.map((i) => (
        <div className="todo-container" onClick={handleChange}>
          <h3 key={i.id}>{i.item}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
