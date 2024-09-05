import { useState } from 'react';
import PropTypes from 'prop-types';
import './ImagesList.css'; // Ajusta la ruta según tu estructura de archivos

const ImageList = ({ ProductImages, onSave, onDelete }) => {
  const [images, setImages] = useState(ProductImages);

  const handleOrderChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index].order = parseInt(value, 10) || 0;
    setImages(updatedImages);
  };

  const handleSave = () => {
    onSave(images);
  };

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    onDelete(index);
  };

  return (
    <div className='image-list-container'>
      <table className='image-list-table'>
        <thead>
          <tr>
            <th>Preview</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image, index) => (
            <tr key={image.id}>
              <td>
                <img
                  src={image.src}
                  alt={`Preview ${index}`}
                  className='preview-image'
                />
              </td>
              <td>
                <input
                  type='text'
                  value={image.order}
                  onChange={(e) => handleOrderChange(index, e.target.value)}
                />
              </td>
              <td>
                <button
                  onClick={() => handleSave(index)}
                  className='action-button'
                >
                  Save
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className='action-button'
                >
                  Desactivar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ImageList.propTypes = {
  ProductImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      order: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      is_active: PropTypes.bool.isRequired,
      productId: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ImageList;
