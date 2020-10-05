import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/TodoReducer";
import { dispatch } from "react-redux";

const [state, dispatch] = useReducer(reducer, initialState);

function App() {
  return (
    <div className="App">
      <h2>{state.item}</h2>
    </div>
  );
}

export default App;
