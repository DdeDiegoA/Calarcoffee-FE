import { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageUploader.css';

const ImageUploader = ({ state, setState }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setState([...state, ...files]);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setState([...state, ...files]);
  };

  const handleRemove = (index) => {
    const updatedImages = [...state];
    updatedImages.splice(index, 1);
    setState(updatedImages);
  };

  return (
    <div className='image-uploader-container'>
      <label
        className={`image-uploader ${dragOver ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        htmlFor='imageUploader'
      >
        Arrastra y suelta aquí
        <input
          type='file'
          accept='image/*'
          id='imageUploader'
          multiple
          onChange={handleFileChange}
          className='file-input'
        />
      </label>
      <div className='preview-container'>
        {state.map((image, index) => (
          <div key={index} className='image-preview'>
            <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
            <button
              onClick={() => handleRemove(index)}
              className='remove-button'
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

ImageUploader.propTypes = {
  state: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  setState: PropTypes.func.isRequired,
};

export default ImageUploader;
