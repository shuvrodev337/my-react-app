const wrapperFunction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};
const addOneAndDouble = wrapperFunction(addOne); // wrapper function returns a function which takes num parameter

console.log(addOneAndDouble(4));
