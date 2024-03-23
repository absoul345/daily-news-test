import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { newsApi } from './news-articles/news-articles.api';
import auth from '../services/admin/admin.slice';
import { adminApi } from '../services/admin/admin.api';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, auth);

export const createStore = () =>
  configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [newsApi.reducerPath]: newsApi.reducer,
      [adminApi.reducerPath]: adminApi.reducer,
      auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([newsApi.middleware, adminApi.middleware]),
  });

export const store = createStore();
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
