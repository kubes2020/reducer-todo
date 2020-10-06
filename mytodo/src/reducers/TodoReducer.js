import React from "react";

export const initialState = [
  {
    item: "learn about reducers",
    completed: false,
    id: new Date(),
  },
];

export const reducer = (state, action) => {
  console.log("add-todo is working, action", action);
  switch (action.type) {
    case "ADD-TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date(),
        },
      ];

    case "TOGGLE-COMPLETED":
      console.log("it's toggle time!");
      return [
        ...state,
        state.map((item) => {
          if (item.id === action.payload) {
            return (item.completed = !item.completed);
          } else {
            return state;
          }
        }),
      ];

    default:
      return state;
  }
};
