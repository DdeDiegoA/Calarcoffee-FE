import { Link } from 'react-router-dom';
import { useState } from 'react';
import RegisterStep1 from './steps/RegisterStep1';
import RegisterStep2 from './steps/RegisterStep2';
import './SignUp.css';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [valideStep1, setValideStep1] = useState(false);
  const [valideStep2, setValideStep2] = useState(false);
  const totalSteps = 2; // Cantidad total de pasos

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <RegisterStep1 validate={setValideStep1} />;
      case 2:
        return <RegisterStep2 validate={setValideStep2} />;
      default:
        return null;
    }
  };
  return (
    <div className='singUp_form_container'>
      <div className='signUp_header'>
        <h3>Registrate aquí </h3>
        <div className='signUp_header-steps'>
          <div
            className={`step_indicator ${currentStep >= 1 ? 'success' : ''}`}
          >
            <i className='bi bi-person-fill-lock' />
            <span>Datos de usuario</span>
          </div>
          <div
            className={`lateral_divisor ${
              currentStep >= 2 ? 'lateral_divisor_success' : ''
            }`}
          />
          <div
            className={`step_indicator ${currentStep >= 2 ? 'success' : ''}`}
          >
            <i className='bi bi-file-earmark-text-fill' />
            <span>Datos de usuario</span>
          </div>
        </div>
      </div>
      <div className='signUp_body'>{renderStepContent()}</div>

      <div className='singUp_form_buttons'>
        {currentStep > 1 && (
          <button className='prev-btn' onClick={handlePrev}>
            Atrás
          </button>
        )}
        {currentStep < totalSteps && (
          <button
            className='next-btn'
            disabled={!valideStep1}
            onClick={handleNext}
          >
            Siguiente
          </button>
        )}
        {currentStep === totalSteps && (
          <button
            className='submit-btn'
            disabled={!valideStep2}
            onClick={() => console.log('registrarse')}
          >
            Registrarse
          </button>
        )}
      </div>
      <div className='haveAccount'>
        ¿Ya tiene una cuenta? <Link to={'/login'}>Ingrese aquí</Link>
      </div>
    </div>
  );
};

export default SignUp;
