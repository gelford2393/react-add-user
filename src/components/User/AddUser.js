import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const inputUserName = useRef();
  const inputUserAge = useRef();
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
      // setEnteredValue({
      //   username: "",
      //   age: "",
      // });
    };
    if (
      inputUserName?.current?.value.trim().length === 0 ||
      inputUserAge?.current?.value.trim().length === 0
    ) {
      setIsValid(false);
      setErrorMessage({
        ...errorMessage,
        title: "Invalid",
        message: "No user or age input",
      });
      return;
    }
    if (inputUserAge?.current?.value < 0) {
      setIsValid(false);
      setErrorMessage({
        ...errorMessage,
        title: "Error",
        message: "Invalid age input",
      });
      return;
    }
    isValid &&
      validUser(true, {
        inputUserName: inputUserName?.current?.value,
        inputUserAge: inputUserAge?.current?.value,
      });
  };
  // const onHandleChange = (e) => {
  //   const { id, value } = e.target;

  //   setEnteredValue({
  //     ...enteredValue,
  //     [id]: value,
  //   });
  // };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={inputUserName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={inputUserAge} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
