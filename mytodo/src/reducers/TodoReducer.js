import React from "react";

export const initialState = {
  item: "learn about reducers",
  completed: false,
  id: new Date(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    // case "Just a Test":
    //     return {
    //         ...state, completed: !state.completed
    //     }

    default:
      return state;
  }
};
