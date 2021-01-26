import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBookReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';

const middleware =
  process.env.NODE_ENV === 'development'
    ? [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        logger,
      ]
    : getDefaultMiddleware;

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
