import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import userRegisterReducer from './userRegisterReducer';
import globalReducer from './globalReducer';
import productReducer from './productsReducer';
import dashboardReducer from './dashboardReducer';

//* Combinamos reducers
export default configureStore({
  reducer: {
    userReducer,
    userRegisterReducer,
    globalReducer,
    productReducer,
    dashboardReducer,
  },
});
