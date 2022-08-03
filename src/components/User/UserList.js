import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
const UserList = ({ users }) => {
  const displayUser = users.map((user, i) => {
    return (
      <li key={i}>
        {user.username} {user.age} years old
      </li>
    );
  });
  return (
    <Card className={styles.users}>
      <ul>{displayUser}</ul>
    </Card>
  );
};

export default UserList;
