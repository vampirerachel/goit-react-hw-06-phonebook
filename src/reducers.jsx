import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

// Action creator for 'ADD_CONTACT'
export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: contact
});

export const { deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export default {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};
