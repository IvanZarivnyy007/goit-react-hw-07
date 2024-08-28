import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../redux/contactsSlice';
import filtersSlice from '../redux/filtersSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
  middleware: (x) => {
    return x({
      serializableCheck: false,
    });
  },
});

export const persist = persistStore(store);
