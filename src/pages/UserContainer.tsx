import UserList from "./UserList";
import useGetUsers from "../hooks/useGetUsers";

const UserContainer = () => {
  const { users, isLoading, error } = useGetUsers();
  const props = { users, isLoading, error };
  return <UserList {...props} />;

  //const props = { name: "Shuvro", age: 25 };
  //The spread operator (...props) takes all key-value pairs inside the props object and
  // expands them as individual attributes inside the JSX component. These two are equivalent:
  // <UserInfo {...props} />
  // <UserInfo name="Shuvro" age={25} />

  // return <UserList users={users} isLoading={isLoading} error={error} />;
};

export default UserContainer;
