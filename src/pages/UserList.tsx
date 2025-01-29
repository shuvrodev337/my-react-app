import React from "react";

const UserList = ({ isLoading, error, users }) => {
  if (isLoading) {
    return <p className="text-2xl text-black">Loading...</p>;
  }

  if (error) {
    return <p className="text-2xl text-red-500">Failed to load users.</p>;
  }

  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
