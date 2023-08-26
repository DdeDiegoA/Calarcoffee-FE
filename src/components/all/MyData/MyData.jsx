import InputStatic from '../InputStatic/InputStatic';
import SelectStatic from '../SelectStatic/SelectStatic';

const MyData = () => {
  const options = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

  return (
    <>
      <h3>Datos de usuario</h3>
      <div>
        <div className='d-flex w-100 gap-3'>
          <InputStatic
            placeholder='Nombre'
            label='Nombre'
            inputId='user_name'
          />
          <InputStatic
            placeholder='Apellido'
            label='Apellido'
            inputId='user_last-name'
          />
        </div>
        <div className='d-flex w-100 gap-3'>
          <SelectStatic
            options={options}
            selectId={'deparment-select2'}
            label='Departamento'
            icon={'bi bi-map-fill'}
            placeholder={'Departamento'}
          />
          <SelectStatic
            options={options}
            selectId={'city-select2'}
            label='Ciudad'
            icon={'bi bi-map-fill'}
            placeholder={'Ciudad'}
          />
        </div>
        <div className='d-flex w-100 gap-3'>
          <InputStatic
            placeholder='Direccion'
            label='Direccion'
            inputId='user_adress'
          />
          <InputStatic
            placeholder='Telefono'
            label='Telefono'
            inputId='user_phone'
          />
        </div>
        <div className='d-flex w-100 gap-3'>
          <InputStatic placeholder='Email' label='Email' inputId='user_email' />
        </div>
      </div>
    </>
  );
};

export default MyData;
