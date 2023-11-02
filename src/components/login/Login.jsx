import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import InputAnimated from '../all/inputAnimated/InputAnimated';
import PropTypes from 'prop-types';
import {
  setRegisterEmail,
  setRegisterPassword,
  onLogin,
} from '../../stores/actions/userRegisterActions';
import './Login.css';

const Login = (props) => {
  const {
    userRegisterReducer: { register_email, register_password },
    userReducer: { user_data },
    setRegisterEmail,
    setRegisterPassword,
    onLogin,
  } = props;
  const navigate = useNavigate();

  const onClickLogin = async () => {
    const isLogin = await onLogin();
    if (isLogin) {
      navigate('/');
    }
  };

  return (
    <div className='login_form_container'>
      <div className='login_header'>
        <h3>¡¡BIENVENIDO!!</h3>
        <h5>Inicia sesión en tu cuenta</h5>
      </div>
      <div className='login_body'>
        <InputAnimated
          icon='bi bi-envelope-at-fill'
          isRequired={true}
          label='Email'
          placeholder='Email'
          type='text'
          onChange={setRegisterEmail}
          value={register_email}
        />
        <div className='password_forgotpassword'>
          <InputAnimated
            icon='bi bi-lock-fill'
            isRequired={true}
            label='Contraseña'
            placeholder='Contraseña'
            type='password'
            onChange={setRegisterPassword}
            value={register_password}
          />
          <a className='forgotPassword' href='#'>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
      <div className='login_footer'>
        <button className='submit-btn' onClick={onClickLogin}>
          Iniciar sesión
        </button>
        <span className='dontHaveAccount'>
          ¿No tiene una cuenta? <Link to={'/signUp'}>Registrese aquí</Link>
        </span>
      </div>
    </div>
  );
};

Login.propTypes = {
  userRegisterReducer: PropTypes.object,
  userReducer: PropTypes.object,
  setRegisterEmail: PropTypes.func,
  setRegisterPassword: PropTypes.func,
  onLogin: PropTypes.func,
};

const mapStateToProps = ({ userReducer, userRegisterReducer }) => {
  return {
    userReducer,
    userRegisterReducer,
  };
};

const mapDispatchToProps = {
  setRegisterEmail,
  setRegisterPassword,
  onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
