import { createSlice } from '@reduxjs/toolkit';
import { faDog, faCat, faFish } from '@fortawesome/free-solid-svg-icons';

// Define an array of icon options
const iconOptions = [faDog, faCat, faFish];

// Utility function to get a random icon from the options
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconOptions.length);
  return iconOptions[randomIndex];
};

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts', 
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

      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;


export default contactsSlice.reducer;
