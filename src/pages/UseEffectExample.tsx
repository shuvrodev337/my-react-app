import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    //  console.log("render");
    // return () => console.log("cleanup");
  }, [hidden]);
  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <ToDo />}
    </div>
  );
};
const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interValId = setInterval(() => {
      console.log("render");

      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interValId);
    // without this cleanUp function,the refference of the timer is not cleared from browser
    // so the 'render' continues even when the Count component is unmounted.
    // cleanup is used so that we can prevent this memory leak .
  }, []);
  return (
    <div className="border p-10">
      <h1>{count}</h1>
    </div>
  );
};
const ToDo = () => {
  const controller = new AbortController(); // this constructor helps stop fetch request.
  const signal = controller.signal;
  useEffect(() => {
    const todos = fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal,
    })
      .then((res) => res.json())
      .then((data) => alert(data.title));
    return () => controller.abort(); // memory leak prevention via cleanup function. stops fetch when component unmounted.
  }, []);
  return (
    <div className="border p-10">
      <h1>Todo</h1>
    </div>
  );
};

export default UseEffectExample;
/*
render: when something gets painted in the screen 
event: triggered by user action, by user click/ typing in keyboard etc
efect:  triggered when the component is  rendered

useEffect : used to handle effects / side-effects and external dependencies
cleanup: the return inside the callback of useEffect. cleanup function runs BEFORE anything inside the  callback body.


never set refference value as useeffect dependency . Bcz they are compared by their refference , not by their value.
so even if the dependency value is not changed.re asigning the state value as same will trigger useeffect render. cz there is
new refference for that state.
*/
