import React from "react";

export const initialState = {
  item: "learn about reducers",
  completed: false,
  id: new Date(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      console.log("add-todo is working");
      return {
        ...state,
        item: action.payload,
        // completed: false,
        // id: new Date(),
      };

    default:
      return state;
  }
};
