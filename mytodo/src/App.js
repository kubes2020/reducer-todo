import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";
import Form from "./components/Form";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Form dispatch={dispatch} state={state} />
      {state.map((i) => (
        <div className="todo-container">
          <h3
            className={i.completed ? "line-through" : "no-line"}
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
