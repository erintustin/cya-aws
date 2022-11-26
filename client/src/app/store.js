import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { resourcesReducer } from '../features/Resources/ResourcesSlice';
import { notesReducer } from '../features/notes/notesSlice';
import { userReducer } from '../features/user/userSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    notes: notesReducer,
    favorites: favoritesReducer,
    user: userReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
