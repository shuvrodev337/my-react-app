import Select from "./pages/Select";
import UserContainer from "./pages/UserContainer";

function App() {
  return (
    <div className="h-screen w-full flex flex-col gap-20 justify-center items-center">
      <UserContainer />
      <Select>
        <Select.SelectOption value={"option 1"}>Option 1</Select.SelectOption>
        <Select.SelectOption value={"option 2"}>Option 2</Select.SelectOption>
        <Select.SelectOption value={"option 3"}>Option 3</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
