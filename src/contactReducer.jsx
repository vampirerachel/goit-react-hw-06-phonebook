// contactReducer.js

import { createSlice } from "@reduxjs/toolkit";
import { faDog, faCat, faFish } from "@fortawesome/free-solid-svg-icons";

const iconOptions = [faDog, faCat, faFish]; // Add more icons as needed

const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconOptions.length);
  return iconOptions[randomIndex];
};

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        ...action.payload,
        icon: getRandomIcon(),
      };
      state.push(newContact);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
