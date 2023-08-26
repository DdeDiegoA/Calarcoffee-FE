import { USER_NAME, USER_LASTNAME } from '../types/userTypes';

const INITIAL_STATE = {
  user_name: 'diego',
  user_lastName: 'arenas',
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

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
