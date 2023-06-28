import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactReducer";
import filterReducer from "./filterReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
