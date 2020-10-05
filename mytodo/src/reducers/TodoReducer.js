import React from "react";

export const initialState = [
  {
    item: "learn about reducers",
    completed: false,
    id: new Date(),
  },
];

export const reducer = (state, action) => {
  console.log("add-todo is working");
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

    default:
      return state;
  }
};

// {
//   ...state,
//   item: action.payload,
//   completed: false,
//   id: new Date(),
// }
