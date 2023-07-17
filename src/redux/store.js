import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import contactsSlice from './items/items-slice';
import authReduser from './auth/auth-slice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReduser = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    auth: persistedReduser,
    contacts: contactsSlice,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
