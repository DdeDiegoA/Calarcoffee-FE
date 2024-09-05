import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import './CreateProductForm.css';
import InputStatic from '../../all/InputStatic/InputStatic';
import {
  getTaxes,
  getCategories,
  createProduct,
} from '../../../stores/actions/productActions';
import SelectStatic from '../../all/SelectStatic/SelectStatic';
import ImageUploader from '../../all/ImageUploader/ImageUploader';

export const CreateProductForm = (props) => {
  const {
    productReducer: { products_taxes, products_categories },
    getTaxes,
    getCategories,
    createProduct,
  } = props;

  useEffect(() => {
    if (products_taxes === null) {
      getTaxes();
    }
    if (products_categories === null) {
      getCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products_taxes, products_categories]);

  const intialFormData = {
    name: '',
    price: 0,
    inventory: 0,
    description: '',
    descriptionEN: '',
    taxes: [],
    categories: [],
  };

  const [formData, setFormData] = useState(intialFormData);

  const [productImages, setProductImages] = useState([]);

  useEffect(() => {}, [formData]);
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

  const handleRemove = (field, idToRemove) => {
    const updatedArray = formData[field].filter(
      (item) => item.id !== idToRemove
    );
    setFormData({
      ...formData,
      [field]: updatedArray,
    });
  };

  const handleSubmit = async () => {
    // console.log('Formulario enviado:', formData, productImages);
    await createProduct(formData, productImages);
    setFormData(intialFormData);
    setProductImages([]);
  };
  return (
    <div className='product_form_container'>
      <div className='product_header'>
        <h3>¡Agrega un nuevo producto!</h3>
        <h5>Rellena los detalles del producto</h5>
      </div>
      <div className='product_images'>
        <ImageUploader state={productImages} setState={setProductImages} />
      </div>
      <div className='product_body'>
        <div className='form_column'>
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
          <div className='select-elements_container'>
            <SelectStatic
              options={products_categories}
              selectId={'categories-select'}
              label='Categorias'
              // icon={'bi bi-map-fill'}
              placeholder={'Categorias'}
              onChange={(value) => handleSelect('categories', value)}
              value={formData.categories[0]?.name}
            />
            <div className='items-selected_container'>
              <div className='items-selected_title'>Categorias:</div>
              <div className='items-selected_items_container'>
                {formData.categories.length >= 1 &&
                  formData.categories.map((categorie, index) => {
                    return (
                      <div className='item-selected' key={index}>
                        {categorie.name}
                        <span
                          onClick={() =>
                            handleRemove('categories', categorie.id)
                          }
                        >
                          x
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className='form_column'>
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
          <div className='select-elements_container'>
            <SelectStatic
              options={products_taxes}
              selectId={'taxes-select'}
              label='Impuestos'
              // icon={'bi bi-map-fill'}
              placeholder={'Impuestos'}
              onChange={(value) => handleSelect('taxes', value)}
              value={formData.taxes[0]?.name}
            />
            <div className='items-selected_container'>
              <div className='items-selected_title'>Impuestos:</div>
              <div className='items-selected_items_container'>
                {formData.taxes.length >= 1 &&
                  formData.taxes.map((tax, index) => {
                    return (
                      <div className='item-selected' key={index}>
                        {tax.name}
                        <span onClick={() => handleRemove('taxes', tax.id)}>
                          x
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
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
  getCategories: PropTypes.func,
  createProduct: PropTypes.func,
};

const mapStateToProps = ({ productReducer }) => {
  return {
    productReducer,
  };
};

const mapDispatchToProps = {
  getTaxes,
  getCategories,
  createProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm);
