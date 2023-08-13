import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/Cart/cartSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
