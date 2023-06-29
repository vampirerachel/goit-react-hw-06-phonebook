import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactReducer";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) => {
    const nameMatch = contact.name.toLowerCase().includes(filter.toLowerCase());
    const numberMatch = contact.number.includes(filter);
    return nameMatch || numberMatch;
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactList}>
      <h2>Contact List</h2>
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={styles.contactListItem}>
              <FontAwesomeIcon icon={contact.icon} />
              {contact.name} - {contact.number}
              <button
                onClick={() => handleDelete(contact.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
