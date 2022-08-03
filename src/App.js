import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [usersData, setUsersData] = useState([]);
  const onAddUser = (data) => {
    setUsersData((prevUserData) => {
      return [...prevUserData, data];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UserList users={usersData} />
    </div>
  );
}

export default App;
