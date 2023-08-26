import checkPasswordStrength from '../../utils/checkPassword';
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

export const cleanRegister = () => (dispatch) => {
  dispatch({
    type: CLEAN_REGISTER,
  });
};

export const setRegisterError = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_ERROR,
    payload,
  });
};

export const setPasswordValidate = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_PASSWORD_VALIDATE,
    payload,
  });
};

export const setRegisterName = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_NAME,
    payload,
  });
};

export const setRegisterLastName = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_LASTNAME,
    payload,
  });
};

export const setRegisterEmail = (payload) => (dispatch, getState) => {
  const { register_confirm_email } = getState().userRegisterReducer;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload)) {
    dispatch(
      setRegisterError({
        error: 'email',
        message: 'Debes ingresar un correo valido',
      })
    );
  } else {
    dispatch(setRegisterError({}));
  }

  if (register_confirm_email === payload) {
    dispatch(setRegisterError({}));
  }

  dispatch({
    type: REGISTER_EMAIL,
    payload,
  });
};

export const setRegisterConfirmEmail = (payload) => (dispatch, getState) => {
  const { register_email } = getState().userRegisterReducer;
  if (register_email !== payload) {
    dispatch(
      setRegisterError({
        error: 'confirm_email',
        message: 'Los correos no coinciden',
      })
    );
  } else {
    dispatch(setRegisterError({}));
  }
  dispatch({
    type: REGISTER_CONFIRM_EMAIL,
    payload,
  });
};

export const checkPassword = (payload) => (dispatch) => {
  const response = checkPasswordStrength(payload);
  dispatch(setPasswordValidate(response));
};

export const setRegisterPassword = (payload) => (dispatch, getState) => {
  const { register_confirm_password } = getState().userRegisterReducer;
  if (register_confirm_password === payload) {
    dispatch(setRegisterError({}));
  }
  dispatch(checkPassword(payload));
  dispatch({
    type: REGISTER_PASSWORD,
    payload,
  });
};

export const setRegisterConfirmPassword = (payload) => (dispatch, getState) => {
  const { register_password } = getState().userRegisterReducer;
  if (register_password !== payload) {
    dispatch(
      setRegisterError({
        error: 'password',
        message: 'Las contraseñas no coinciden',
      })
    );
  } else {
    dispatch(setRegisterError({}));
  }

  dispatch({
    type: REGISTER_CONFIRM_PASSWORD,
    payload,
  });
};

export const setRegisterDepartment = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_DEPARTMENT,
    payload,
  });
};

export const setRegisterCity = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_CITY,
    payload,
  });
};

export const setRegisterAddress = (payload) => (dispatch) => {
  dispatch({
    type: REGISTER_ADDRESS,
    payload,
  });
};

export const setRegisterCellphone = (payload) => (dispatch, getState) => {
  const { register_cellphone } = getState().userRegisterReducer;

  if (register_cellphone.length === 9) {
    dispatch(setRegisterError({}));
  } else {
    dispatch(
      setRegisterError({
        error: 'phone',
        message: 'El numero debe de ser de 10 digitos',
      })
    );
  }

  dispatch({
    type: REGISTER_CELLPHONE,
    payload,
  });
};

export const setRegisterDataPolicy = () => (dispatch, getState) => {
  const { register_data_processing_policy } = getState().userRegisterReducer;
  dispatch({
    type: REGISTER_DATA_PROCESSING_POLICY,
    payload: !register_data_processing_policy,
  });
};
