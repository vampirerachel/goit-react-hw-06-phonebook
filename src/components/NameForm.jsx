import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../reducers";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./styles.module.css";

const NameForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

 const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: capitalizeFirstLetter(name),
      number: capitalizeFirstLetter(number),
    };

    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };


  return (
    <div className={styles.phonebook}>
      <p className={styles.label}>Name</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Number</p>
          <input
            className={styles.input}
            type="text"
            name="number"
            required
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );

}
export default NameForm;