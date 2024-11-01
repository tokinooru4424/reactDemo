import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length == 0) {
      alert("You delete all the user");
    }
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser ? "Hide list user" : "Show list user"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
