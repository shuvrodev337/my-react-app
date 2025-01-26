import React, { useReducer } from "react";

const UseReducerExample = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return { count: currentState.count + 1 };
      case "decrement":
        return { count: currentState.count - 1 };

      default:
        return currentState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-7xl text-red-600 font-semibold">{state.count}</h1>
      <div className="flex gap-1">
        <button
          onClick={() => dispatch({ type: "increment" })}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Increase
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
/*
   * useReducer gives the state and a dispatch function
   * useReducer takes
     1. reducer function (where logical statements are managed)
     2. initial state

   * reducer function  takes 2 params:  1. the currentState 2. the object that dipatch function passes.(named as action)
     we can take necessary logical measures depending on the action's type.
   */
