import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [enteredValue, setEnteredValue] = useState({
    username: "",
    age: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(true);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const validUser = (valid, data) => {
      setIsValid(valid);
      onAddUser(data);
      setEnteredValue({
        username: "",
        age: "",
      });
    };
    if (
      enteredValue.username.trim().length === 0 ||
      enteredValue.age.trim().length === 0
    ) {
      setIsValid(false);
      setErrorMessage({
        ...errorMessage,
        title: "Invalid",
        message: "No user or age input",
      });
      return;
    }
    if (enteredValue.age < 0) {
      setIsValid(false);
      setErrorMessage({
        ...errorMessage,
        title: "Error",
        message: "Invalid age input",
      });
      return;
    }
    isValid && validUser(true, enteredValue);
  };
  const onHandleChange = (e) => {
    const { id, value } = e.target;

    setEnteredValue({
      ...enteredValue,
      [id]: value,
    });
  };

  return (
    <>
      {!isValid && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          isValid={isValid}
          setIsValid={setIsValid}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={onHandleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredValue.username}
            id="username"
            type="text"
            onChange={onHandleChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredValue.age}
            id="age"
            type="number"
            onChange={onHandleChange}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
