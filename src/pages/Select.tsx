import { createContext, useContext, useState } from "react";
const SelectContext = createContext(null);
const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const values = { selectedOption, setSelectedOption };
  console.log(selectedOption);
  return (
    <SelectContext.Provider value={values}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};
const SelectOption = ({ value, children }) => {
  const { selectedOption } = useSelectContex();
  const activeOption = selectedOption === value;
  return (
    <option
      className={`${activeOption ? "bg-red-600" : "bg-white"}`}
      value={value}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;
export default Select;

const useSelectContex = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Context used outside boundary");
  }
  return context;
};
