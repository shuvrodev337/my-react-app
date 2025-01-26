import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  // console.log("render");
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleAsyncIncrease = () => {
    setTimeout(() => {
      //  setCount(count + 1); //  here count = starting value of count , It can not get the updated (if) value of the state
      setCount((prevCount) => prevCount + 1); //  here prevCount =  updated (if) value of the count state
    }, 3333);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-7xl text-red-600 font-semibold">{count}</h1>
      <div className="flex gap-1">
        <button
          onClick={handleIncrease}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Increase
        </button>
        <button
          onClick={handleAsyncIncrease}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          Async Increase
        </button>

        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;

/*
If the state is reset, React re renders once to make sure the state is same as the initially set state, 
after that if the state is reset to same as the initially set state, react does not re-render 

batch Update - if there is multiple state change request,  react groups and updates all by batch, to improve performance.
 
*/
