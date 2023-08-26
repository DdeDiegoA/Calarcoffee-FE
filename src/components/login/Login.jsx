import { Link } from 'react-router-dom';
import './Login.css';
import InputAnimated from '../all/inputAnimated/InputAnimated';

const Login = () => {
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
        />
        <div className='password_forgotpassword'>
          <InputAnimated
            icon='bi bi-lock-fill'
            isRequired={true}
            label='Contraseña'
            placeholder='Contraseña'
            type='password'
          />
          <a className='forgotPassword' href='#'>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
      <div className='login_footer'>
        <button className='submit-btn'>Iniciar sesión</button>
        <span className='dontHaveAccount'>
          ¿No tiene una cuenta? <Link to={'/signUp'}>Registrese aquí</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
