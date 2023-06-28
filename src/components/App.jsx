import React from "react";
import { useSelector } from "react-redux";
import ContactList from "./ContactList";
import NameForm from "./NameForm";
import Filter from "./Filter";
import styles from "./styles.module.css";

const App = () => {
return (
  <div className={styles.phonebook}>
    <h2>Phonebook</h2>
    <NameForm />
    <Filter />
    <ContactList />
  </div>
);
};

export default App;