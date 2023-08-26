import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import userRegisterReducer from './userRegisterReducer';

//* Combinamos reducers
export default configureStore({
  reducer: {
    userReducer,
    userRegisterReducer,
  },
});
