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
      return state;

    default:
      return state;
  }
};

// case "TOGGLE-COMPLETED":
//   return [
//     ...state.map((item) => {
//       if (item.id === action.payload) {
//         {...item, completed: true}
//       } else {
//         return state;
//       }
//     }),
//   ];
