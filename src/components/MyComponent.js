import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Duc", age: "16" },
    { id: 2, name: "Truong", age: "26" },
    { id: 3, name: "Minh", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, [...listUsers]]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
