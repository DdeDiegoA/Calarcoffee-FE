import { connect } from 'react-redux';
import InputAnimated from '../../all/inputAnimated/InputAnimated';
import PropTypes from 'prop-types';
import {
  setRegisterName,
  setRegisterLastName,
  setRegisterEmail,
  setRegisterConfirmEmail,
  setRegisterPassword,
  setRegisterConfirmPassword,
  setPasswordValidate,
  checkPassword,
} from '../../../stores/actions/userRegisterActions';
import { isDataValid } from '../../../utils/dataIsValid';
import { useEffect } from 'react';

const RegisterStep1 = (props) => {
  const {
    userRegisterReducer: {
      register_name,
      register_lastname,
      register_email,
      register_confirm_email,
      register_password,
      register_confirm_password,
      register_error,
      register_password_validate,
    },
    setRegisterName,
    setRegisterLastName,
    setRegisterEmail,
    setRegisterConfirmEmail,
    setRegisterPassword,
    setRegisterConfirmPassword,
    setPasswordValidate,
    checkPassword,
    validate,
  } = props;

  function onBlurPassword() {
    if (register_password_validate?.class === 'error') {
      return;
    } else {
      setPasswordValidate({});
    }
  }
  function validateStep1(
    register_name,
    register_lastname,
    register_email,
    register_confirm_email,
    register_password,
    register_confirm_password,
    register_error,
    register_password_validate
  ) {
    if (register_error?.error) return false;
    if (register_password_validate?.class === 'error') return false;
    if (register_email !== register_confirm_email) return false;
    if (register_password !== register_confirm_password) return false;

    const data = {
      register_name,
      register_lastname,
      register_email,
      register_confirm_email,
      register_password,
      register_confirm_password,
    };

    return isDataValid(data);
  }
  useEffect(() => {
    validate(
      validateStep1(
        register_name,
        register_lastname,
        register_email,
        register_confirm_email,
        register_password,
        register_confirm_password,
        register_error,
        register_password_validate
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    register_name,
    register_lastname,
    register_email,
    register_confirm_email,
    register_password,
    register_confirm_password,
    register_error,
    register_password_validate,
  ]);
  return (
    <>
      <div className='d-flex gap-1'>
        <InputAnimated
          icon='bi bi-person-circle'
          isRequired={true}
          label='Nombre'
          placeholder='Nombre'
          type='text'
          value={register_name}
          onChange={setRegisterName}
        />
        <InputAnimated
          icon='bi bi-person-circle'
          isRequired={true}
          label='Apellido'
          placeholder='Apellido'
          type='text'
          value={register_lastname}
          onChange={setRegisterLastName}
        />
      </div>
      <div
        className={`position-relative ${
          register_error.error === 'email' ? 'inputError_container' : ''
        }`}
      >
        <InputAnimated
          icon='bi bi-envelope-at-fill'
          isRequired={true}
          label='Email'
          placeholder='Email'
          type='email'
          value={register_email}
          onChange={setRegisterEmail}
        />
        {register_error.error === ('email' || 'confirm_email') && (
          <span className='position-absolute inputError'>
            {register_error.message}
          </span>
        )}
      </div>
      <div
        className={`position-relative ${
          register_error.error === 'email' ? 'inputError_container' : ''
        }`}
      >
        <InputAnimated
          icon='bi bi-envelope-at-fill'
          isRequired={true}
          label='Confirmar Email'
          placeholder='Confirmar Email'
          type='email'
          value={register_confirm_email}
          onChange={setRegisterConfirmEmail}
        />
        {register_error.error === 'confirm_email' && (
          <span className='position-absolute inputError'>
            {register_error.message}
          </span>
        )}
      </div>
      <div
        className={`position-relative ${
          register_password_validate?.class ? 'inputError_container' : ''
        }`}
        onFocus={() => checkPassword(register_password)}
        onBlur={onBlurPassword}
      >
        <InputAnimated
          icon='bi bi-lock-fill'
          isRequired={true}
          label='Contraseña'
          placeholder='Contraseña'
          type='password'
          value={register_password}
          onChange={setRegisterPassword}
        />
        {register_password_validate && (
          <span className='position-absolute inputError'>
            {register_password_validate.result}
          </span>
        )}
      </div>
      <div
        className={`position-relative ${
          register_error.error === 'password' ? 'inputError_container' : ''
        }`}
      >
        <InputAnimated
          icon='bi bi-lock-fill'
          isRequired={true}
          label='Confirmar Contraseña'
          placeholder='Confirmar Contraseña'
          type='password'
          value={register_confirm_password}
          onChange={setRegisterConfirmPassword}
        />
        {register_error.error === 'password' && (
          <span className='position-absolute inputError'>
            {register_error.message}
          </span>
        )}
      </div>
    </>
  );
};

RegisterStep1.propTypes = {
  userRegisterReducer: PropTypes.object,
  setRegisterName: PropTypes.func,
  setRegisterLastName: PropTypes.func,
  setRegisterEmail: PropTypes.func,
  setRegisterConfirmEmail: PropTypes.func,
  setRegisterPassword: PropTypes.func,
  setRegisterConfirmPassword: PropTypes.func,
  setPasswordValidate: PropTypes.func,
  checkPassword: PropTypes.func,
  validate: PropTypes.func,
};

function mapStateToProps({ userRegisterReducer }) {
  return {
    userRegisterReducer,
  };
}

const mapDispatchToProps = {
  setRegisterName,
  setRegisterLastName,
  setRegisterEmail,
  setRegisterConfirmEmail,
  setRegisterPassword,
  setRegisterConfirmPassword,
  setPasswordValidate,
  checkPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep1);
