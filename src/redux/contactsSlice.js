import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContacts(state, { payload }) {
      const index = state.items.findIndex((el) => el.id == payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;

const persistValueConfig = {
  key: 'root',
  storage,
};

export default persistReducer(persistValueConfig, contactsSlice.reducer);
