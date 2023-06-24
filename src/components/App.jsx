import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../reducers';

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = (event) => {
    event.preventDefault();

    dispatch(addContact({ name, phone }));

    // Clear input fields
    setName('');
    setPhone('');
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = filter
  ? contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  : contacts;

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Contact</h2>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default App;
