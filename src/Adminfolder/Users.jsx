import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const getItems = async () => {
    const response = await fetch("http://localhost:5000/things/", {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials:"include",
    });
    const actualData = await response.json();
    setUsers(actualData);
  };
  useEffect(() => {
    getItems();
  }, []);
  const deleteUser = async (user) => {
    const res = await fetch("http://localhost:5000/deleteuser/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: user.name }),
    }).then(
      alert(`${user.name}'s info has been deleted successfully from Database`),
      window.location.reload()
      );

  };

  return (
    <>
      {Array.from(users).map((users, key) => {
        // setitemname(items.name)
        // setitemprice(items.price)
        return (
          <div className="itemslist">
            <li>
              <h1>Name:{users.name}</h1>
              <h1> Email:{users.email}</h1>
              <button onClick={() => deleteUser(users)}>
                Delete this user
              </button>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Users;
