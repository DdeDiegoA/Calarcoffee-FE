import {
  CLEAN_REGISTER,
  REGISTER_NAME,
  REGISTER_LASTNAME,
  REGISTER_EMAIL,
  REGISTER_CONFIRM_EMAIL,
  REGISTER_PASSWORD,
  REGISTER_CONFIRM_PASSWORD,
  REGISTER_DEPARTMENT,
  REGISTER_CITY,
  REGISTER_ADDRESS,
  REGISTER_CELLPHONE,
  REGISTER_DATA_PROCESSING_POLICY,
  REGISTER_ERROR,
  REGISTER_PASSWORD_VALIDATE,
} from '../types/userRegisterTypes';

const INITIAL_STATE = {
  register_name: '',
  register_lastname: '',
  register_email: '',
  register_confirm_email: '',
  register_password: '',
  register_confirm_password: '',
  register_department: '',
  register_city: '',
  register_address: '',
  register_cellphone: '',
  register_data_processing_policy: false,
  register_error: {},
  register_password_validate: {},
};

const userRegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAN_REGISTER:
      return {
        register_name: '',
        register_lastname: '',
        register_email: '',
        register_confirm_email: '',
        register_password: '',
        register_confirm_password: '',
        register_department: '',
        register_city: '',
        register_address: '',
        register_cellphone: '',
        register_data_processing_policy: false,
        register_error: {},
        register_password_validate: {},
      };
    case REGISTER_NAME:
      return {
        ...state,
        register_name: action.payload,
      };
    case REGISTER_LASTNAME:
      return {
        ...state,
        register_lastname: action.payload,
      };
    case REGISTER_EMAIL:
      return {
        ...state,
        register_email: action.payload,
      };
    case REGISTER_CONFIRM_EMAIL:
      return {
        ...state,
        register_confirm_email: action.payload,
      };
    case REGISTER_PASSWORD:
      return {
        ...state,
        register_password: action.payload,
      };
    case REGISTER_CONFIRM_PASSWORD:
      return {
        ...state,
        register_confirm_password: action.payload,
      };
    case REGISTER_DEPARTMENT:
      return {
        ...state,
        register_department: action.payload,
      };
    case REGISTER_CITY:
      return {
        ...state,
        register_city: action.payload,
      };
    case REGISTER_ADDRESS:
      return {
        ...state,
        register_address: action.payload,
      };
    case REGISTER_CELLPHONE:
      return {
        ...state,
        register_cellphone: action.payload,
      };
    case REGISTER_DATA_PROCESSING_POLICY:
      return {
        ...state,
        register_data_processing_policy: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        register_error: action.payload,
      };
    case REGISTER_PASSWORD_VALIDATE:
      return {
        ...state,
        register_password_validate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userRegisterReducer;
