import { useEffect, useState } from 'react';
import InputStatic from '../InputStatic/InputStatic';
import SelectStatic from '../SelectStatic/SelectStatic';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getDepartmentOptions,
  getCitiesOptions,
} from '../../../stores/actions/globalActions';
import {
  setDepartmentSelected,
  setCitySelected,
} from '../../../stores/actions/userActions';

export const MyData = (props) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const {
    userReducer: {
      user_data,
      user_selected_country,
      user_selected_department,
      user_selected_city,
    },
    globalReducer: {
      global_countries_options,
      global_departments_options,
      global_cities_options,
    },
    getDepartmentOptions,
    getCitiesOptions,
    setDepartmentSelected,
    setCitySelected,
  } = props;

  useEffect(() => {
    if (user_data !== null) {
      setName(user_data.name);
      setLastname(user_data.lastname);
      setDepartmentSelected(user_data.Department);
      setCitySelected(user_data.City);
      setAddress(user_data.address);
      setPhone(user_data.phone);
      setEmail(user_data.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_data]);

  useEffect(() => {
    if (global_countries_options !== null) {
      getDepartmentOptions(user_selected_country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global_countries_options]);

  useEffect(() => {
    if (global_departments_options !== null && user_selected_department?.id) {
      getCitiesOptions(user_selected_department);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_selected_department]);

  return (
    <>
      <h3>Datos de usuario</h3>
      {user_data !== null && (
        <div>
          <div className='d-flex w-100 gap-3'>
            <InputStatic
              placeholder='Nombre'
              label='Nombre'
              inputId='user_name'
              value={name}
              onChange={setName}
            />
            <InputStatic
              placeholder='Apellido'
              label='Apellido'
              inputId='user_last-name'
              value={lastname}
              onChange={setLastname}
            />
          </div>
          <div className='d-flex w-100 gap-3'>
            <SelectStatic
              options={global_departments_options}
              selectId={'deparment-select2'}
              label='Departamento'
              // icon={'bi bi-map-fill'}
              placeholder={'Departamento'}
              value={user_selected_department?.name || user_selected_department}
              onChange={setDepartmentSelected}
            />
            <SelectStatic
              options={global_cities_options}
              selectId={'city-select2'}
              label='Ciudad'
              // icon={'bi bi-map-fill'}
              placeholder={'Ciudad'}
              value={user_selected_city?.name || user_selected_city}
              onChange={setCitySelected}
              // disabled={true}
            />
          </div>
          <div className='d-flex w-100 gap-3'>
            <InputStatic
              placeholder='Direccion'
              label='Direccion'
              inputId='user_adress'
              value={address}
              onChange={setAddress}
            />
            <InputStatic
              placeholder='Telefono'
              label='Telefono'
              inputId='user_phone'
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div className='d-flex w-100 gap-3'>
            <InputStatic
              placeholder='Email'
              label='Email'
              inputId='user_email'
              value={email}
              onChange={setEmail}
            />
          </div>
        </div>
      )}
    </>
  );
};

MyData.propTypes = {
  userReducer: PropTypes.object,
  globalReducer: PropTypes.object,
  getDepartmentOptions: PropTypes.func,
  getCitiesOptions: PropTypes.func,
  setDepartmentSelected: PropTypes.func,
  setCitySelected: PropTypes.func,
};

const mapStateToProps = ({ userReducer, globalReducer }) => {
  return {
    userReducer,
    globalReducer,
  };
};

const mapDispatchToProps = {
  getDepartmentOptions,
  getCitiesOptions,
  setDepartmentSelected,
  setCitySelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyData);
