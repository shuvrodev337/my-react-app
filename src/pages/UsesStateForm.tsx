import React, { ChangeEvent, useState } from "react";

const UsesStateForm = () => {
  /*
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
*/
  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className=" border-2"
        name="name"
        type="text"
      />
      <input
        onChange={handleChange}
        className=" border-2"
        name="email"
        type="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsesStateForm;
