import {
  USER_NAME,
  USER_LASTNAME,
  USER_DATA,
  USER_PAYSTATUSES,
  USER_SELECTED_COUNTRY,
  USER_SELECTED_DEPARTMENT,
  USER_SELECTED_CITY,
} from '../types/userTypes';

const INITIAL_STATE = {
  user_name: 'diego',
  user_lastName: 'arenas',
  user_data: null,
  user_payStatuses: null,
  user_selected_country: null,
  user_selected_department: null,
  user_selected_city: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        user_name: action.payload,
      };
    case USER_LASTNAME:
      return {
        ...state,
        user_lastName: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };
    case USER_PAYSTATUSES:
      return {
        ...state,
        user_payStatuses: action.payload,
      };
    case USER_SELECTED_COUNTRY:
      return {
        ...state,
        user_selected_country: action.payload,
      };
    case USER_SELECTED_DEPARTMENT:
      return {
        ...state,
        user_selected_department: action.payload,
      };
    case USER_SELECTED_CITY:
      return {
        ...state,
        user_selected_city: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
