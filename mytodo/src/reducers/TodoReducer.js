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
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });

    case "DELETE-COMPLETED":
      console.log("delete activated");
      return state.filter((item) => !item.completed);

    default:
      return state;
  }
};

//Return statements didn't work when on a different line
// case "DELETE-COMPLETED":
//       console.log("delete activated");
//       return [
//         ...state,
//         state.filter((item) => {
//           if (item.completed === true) {
//             return {};
//           } else {
//             return item;
//           }
//         }),
//       ];

// This one almost worked
// case "DELETE-COMPLETED":
//       console.log("delete activated");
//       return{
//       state.filter((item) => {
//         item.completed === true ? {} : item;
//       })
//     }

// case "DELETE-COMPLETED":
//       console.log("delete activated");
//       return [
//         ...state,
//         state.filter((item) => {
//           if (item.completed === true) {
//             return {};
//           } else {
//             return item;
//           }
//         }),
//       ];

//     default:
//       return state;
//   }
