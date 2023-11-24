import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import './CreateProductForm.css';
import InputStatic from '../../all/InputStatic/InputStatic';
import { getTaxes } from '../../../stores/actions/productActions';
import SelectStatic from '../../all/SelectStatic/SelectStatic';

export const CreateProductForm = (props) => {
  const {
    productReducer: { products_taxes },
    getTaxes,
  } = props;

  useEffect(() => {
    if (products_taxes === null) {
      getTaxes();
    }
    return () => {
      console.log('se cerro');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    inventory: 0,
    description: '',
    descriptionEN: '',
    taxes: [],
    categories: [
      {
        id: 1,
        name: 'metodo',
        slug: 'method',
      },
    ],
  });
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelect = (field, value) => {
    if (!formData[field].some((item) => item.id === value.id)) {
      // Si no está presente, agregarlo al array
      const fieldArray = [...formData[field], value];
      setFormData({
        ...formData,
        [field]: fieldArray,
      });
    }
  };
  console.log(formData.taxes);
  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className='product_form_container'>
      <div className='product_header'>
        <h3>¡Agrega un nuevo producto!</h3>
        <h5>Rellena los detalles del producto</h5>
      </div>
      <div className='product_body'>
        <InputStatic
          icon='bi bi-box'
          isRequired={true}
          label='Nombre del producto'
          placeholder='Nombre del producto'
          type='text'
          onChange={(value) => handleChange('name', value)}
          value={formData.name}
        />
        <div className='inputs_group'>
          <InputStatic
            icon='bi bi-cash'
            isRequired={true}
            label='Precio'
            placeholder='Precio'
            type='number'
            onChange={(value) => handleChange('price', value)}
            value={formData.price}
          />
          <InputStatic
            icon='bi bi-archive'
            isRequired={true}
            label='Inventario'
            placeholder='Inventario'
            type='number'
            onChange={(value) => handleChange('inventory', value)}
            value={formData.inventory}
          />
        </div>
        <InputStatic
          icon='bi bi-file-earmark-text'
          isRequired={true}
          label='Descripción'
          placeholder='Descripción'
          type='text'
          onChange={(value) => handleChange('description', value)}
          value={formData.description}
        />
        <InputStatic
          icon='bi bi-file-earmark-text'
          isRequired={true}
          label='Descripción en inglés'
          placeholder='Descripción en inglés'
          type='text'
          onChange={(value) => handleChange('descriptionEN', value)}
          value={formData.descriptionEN}
        />
        <SelectStatic
          options={products_taxes}
          selectId={'deparment-select2'}
          label='Impuestos'
          // icon={'bi bi-map-fill'}
          placeholder={'Impuestos'}
          onChange={(value) => handleSelect('taxes', value)}
          value={formData.taxes.name}
        />
        {/* {formData.taxes.map((tax, index) => {
          <span key={index}>{tax.name}</span>;
        })} */}
      </div>
      <div className='product_footer'>
        <button className='submit-btn' onClick={handleSubmit}>
          Agregar Producto
        </button>
      </div>
    </div>
  );
};

CreateProductForm.propTypes = {
  productReducer: PropTypes.object,
  getTaxes: PropTypes.func,
};

const mapStateToProps = ({ productReducer }) => {
  return {
    productReducer,
  };
};

const mapDispatchToProps = {
  getTaxes,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm);
