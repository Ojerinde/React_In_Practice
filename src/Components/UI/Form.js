import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import Button from "./Button";
import Input from "./Input";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const Form = (props) => {
  // Enabling the form button
  const [formIsValid, setFormIsValid] = useState(true);

  // Verifying the inputs
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [lastNameIsValid, setLastNameIsValid] = useState(null);
  const [firstNameIsValid, setFirstNameIsValid] = useState(null);

  // Togglimg success modal
  const [success, setSuccess] = useState(false)

  // Getting the inputs
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {

    setFormIsValid(emailIsValid && lastNameIsValid && firstNameIsValid);
  }, [emailIsValid, lastNameIsValid, firstNameIsValid]);

  // Input Handler
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  // Inputs validity handlers
  const validateFirstName = (e) => {
    setFirstNameIsValid(e.target.value.trim().length > 3);
  };

  const validateLastName = (e) => {
    setLastNameIsValid(e.target.value.trim().length > 5);
  };

  const validateEmail = (e) => {
    setEmailIsValid(e.target.value.includes("@"));
  };

  // Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    props.addUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    // Clearing the inputs field
    setEmail("");
    setFirstName("");
    setLastName("");

    // Triggering the success modal
    setSuccess(true)

    // Disabling the button back.
    setFormIsValid(false);
    setEmailIsValid(null);
    setLastNameIsValid(null);
    setFirstNameIsValid(null);

    // Implementing useContext
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify([
    //     {
    //       firstName: firstName,
    //       lastName: lastName,
    //       email: email,
    //     },
    //   ])
    // );
  };

  const clearModal = () => {
    setSuccess(false)
  }

  return (
    <>
    { success && <Modal onClick={clearModal} /> }
      <Card className={classes.form_card}>
        <p className={classes.greeting}>Hi, welcome</p>
        <form onSubmit={submitHandler} className={classes.form}>
          <Input
            label="First Name"
            id="firstname"
            type="text"
            placeholder="Enter your first Name"
            name="firstname"
            onChange={firstNameHandler}
            onBlur={validateFirstName}
            value={firstName} // To clear the field
            isValid={firstNameIsValid} // To add invalid style
          />
          <Input
            label="Last Name"
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            name="lastname"
            onChange={lastNameHandler}
            onBlur={validateLastName}
            value={lastName}
            isValid={lastNameIsValid}
          />
          <Input
            label="E-Mail"
            id="email"
            type="email"
            placeholder="Enter your E-mail"
            name="email"
            onChange={emailHandler}
            onBlur={validateEmail}
            value={email}
            isValid={emailIsValid}
          />
      
          <Button type="submit" disabled={!formIsValid}>
            Okay
          </Button>
        </form>
      </Card>
    </>
  );
};
export default Form;
