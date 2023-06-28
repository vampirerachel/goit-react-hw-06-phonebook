import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../reducers';
import styles from './styles.module.css';

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [filter, setFilter] = useState('');

  const handleAddContact = () => {
    if (name.trim() === '' || phone.trim() === '') {
      return;
    }

    const newContact = {
      id: new Date().getTime().toString(),
      name,
      phone,
    };

    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <h2>Add New Contact</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className={styles.button} onClick={handleAddContact}>Add Contact</button>
      </div>
      <h2>Filter Contacts</h2>
      <div className={styles.filterContainer}>
        <label htmlFor="filterInput">Filter by Name:</label>
        <input
          id="filterInput"
          type="text"
          placeholder="Enter contact name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button className={styles.button} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
