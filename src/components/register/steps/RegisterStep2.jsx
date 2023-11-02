import CheckBox from '../../all/CheckBox/CheckBox';
import Select from '../../all/Select/Select';
import InputAnimated from '../../all/inputAnimated/InputAnimated';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isDataValid } from '../../../utils/dataIsValid';
import { connect } from 'react-redux';
import {
  setRegisterDepartment,
  setRegisterCity,
  setRegisterAddress,
  setRegisterCellphone,
  setRegisterDataPolicy,
} from '../../../stores/actions/userRegisterActions';
import { useEffect } from 'react';

const RegisterStep2 = (props) => {
  const options = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
  const {
    userRegisterReducer: {
      register_department,
      register_city,
      register_address,
      register_cellphone,
      register_data_processing_policy,
      register_error,
    },
    setRegisterDepartment,
    setRegisterCity,
    setRegisterAddress,
    setRegisterCellphone,
    setRegisterDataPolicy,
    validate,
  } = props;
  function validateStep2(
    register_department,
    register_city,
    register_address,
    register_cellphone,
    register_data_processing_policy,
    register_error
  ) {
    if (register_error?.error) return false;
    if (register_data_processing_policy === false) return false;
    const data = {
      register_department,
      register_city,
      register_address,
      register_cellphone,
    };
    return isDataValid(data);
  }

  useEffect(() => {
    validate(
      validateStep2(
        register_department,
        register_city,
        register_address,
        register_cellphone,
        register_data_processing_policy,
        register_error
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    register_department,
    register_city,
    register_address,
    register_cellphone,
    register_data_processing_policy,
    register_error,
  ]);

  return (
    <>
      <div className='d-flex gap-1 w-100'>
        <Select
          options={options}
          selectId={'department-select'}
          label='Departamento'
          icon={'bi bi-compass-fill'}
          placeholder={'Departamento'}
          value={register_department}
          onChange={setRegisterDepartment}
        />
        <Select
          options={options}
          selectId={'city-select'}
          label='Cuidad'
          icon={'bi bi-map-fill'}
          placeholder={'Cuidad'}
          value={register_city}
          onChange={setRegisterCity}
        />
      </div>
      <InputAnimated
        icon='bi bi-geo-alt-fill'
        isRequired={true}
        label='Dirección'
        placeholder='Dirección'
        type='text'
        value={register_address}
        onChange={setRegisterAddress}
      />
      <div
        className={`position-relative ${
          register_error.error === 'phone' ? 'inputError_container' : ''
        }`}
      >
        <InputAnimated
          icon='bi bi-lock-fill'
          isRequired={true}
          label='Celular'
          placeholder='Celular'
          type='number'
          value={register_cellphone}
          onChange={setRegisterCellphone}
        />
        {register_error.error === 'phone' && (
          <span className='position-absolute inputError'>
            {register_error.message}
          </span>
        )}
      </div>
      <CheckBox
        value={register_data_processing_policy}
        onChange={setRegisterDataPolicy}
      >
        Acepto la <Link>politica de tratamiento de datos</Link>
      </CheckBox>
    </>
  );
};

RegisterStep2.propTypes = {
  userRegisterReducer: PropTypes.object,
  setRegisterDepartment: PropTypes.func,
  setRegisterCity: PropTypes.func,
  setRegisterAddress: PropTypes.func,
  setRegisterCellphone: PropTypes.func,
  setRegisterDataPolicy: PropTypes.func,
  validate: PropTypes.func,
};

function mapStateToProps({ userRegisterReducer }) {
  return {
    userRegisterReducer,
  };
}

const mapDispatchToProps = {
  setRegisterDepartment,
  setRegisterCity,
  setRegisterAddress,
  setRegisterCellphone,
  setRegisterDataPolicy,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep2);
