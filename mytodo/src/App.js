import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";
// const firstAction = { type: "INCREMENT" };
// initialState = reducer(initialState, firstAction);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  const [todoState, setTodoState] = useState();

  const onChange = (e) => {
    e.persist();
    setTodoState(e.target.value);
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="App">
      <form>
        <label htmlFor="todo">
          ToDo
          <input
            name="todo"
            id="todo"
            type="text"
            onChange={onChange}
            value={todoState}
          ></input>
          <button
            onClick={() => dispatch({ type: "ADD-TODO", payload: todoState })}
          >
            Submit
          </button>
        </label>
      </form>
      <h3>{state.item}</h3>
    </div>
  );
}

export default App;
