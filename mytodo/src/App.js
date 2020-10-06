import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";
import Form from "./components/Form";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("dispatch", dispatch);
  console.log("this is state", state);
  return (
    <div className="App">
      <Form dispatch={dispatch} state={state} />
      {state.map((i) => (
        <div className="todo-container">
          <h3
            key={i.id}
            onClick={() =>
              dispatch({ type: "TOGGLE-COMPLETED", payload: i.id })
            }
          >
            {i.item}
          </h3>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "DELETE-COMPLETED" })}>
        Delete Selected
      </button>
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
