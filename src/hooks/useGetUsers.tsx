import React, { useEffect, useState } from "react";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";
  const controller = new AbortController();
  const signal = controller.signal;

  const getUsers = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await fetch(url, { signal });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(true);
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    return () => controller.abort();
  }, []);

  return { users, isLoading, error };
};

export default useGetUsers;
