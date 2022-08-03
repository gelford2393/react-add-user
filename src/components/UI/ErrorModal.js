import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, isValid, setIsValid }) => {
  const handleOnClick = () => {
    setIsValid(!isValid);
  };
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={handleOnClick}>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
