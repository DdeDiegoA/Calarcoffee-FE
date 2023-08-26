import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import userRegisterReducer from './userRegisterReducer';
import globalReducer from './globalReducer';

//* Combinamos reducers
export default configureStore({
  reducer: {
    userReducer,
    userRegisterReducer,
    globalReducer,
  },
});
