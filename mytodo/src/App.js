import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";
import Form from "./components/Form";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  // dispatch({ type: "ADD-TODO", payload: todoState });

  return (
    <div className="App">
      <Form dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;

{
  /* <form onSubmit={onSubmit}>
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
      ))} */
}
