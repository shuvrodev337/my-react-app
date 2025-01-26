import React, { ChangeEvent, useReducer } from "react";

const UseReducerForm = () => {
  type TAction = {
    type: string;
    payload: string;
  };

  const initialUser = {
    name: "",
    email: "",
  };
  const reducer = (currentUser: typeof initialUser, action: TAction) => {
    switch (action.type) {
      case "addName":
        return { ...currentUser, name: action.payload };
      case "addEmail":
        return { ...currentUser, email: action.payload };

      default:
        return currentUser;
    }
  };

  const [user, dispatch] = useReducer(reducer, initialUser);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className=" border-2"
        name="name"
        type="text"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        className=" border-2"
        name="email"
        type="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducerForm;
