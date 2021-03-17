import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../../styles/uploadForm/uploadForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
      console.log(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };
  return (
    <form className="UploadForm">
      <label className="UploadFormLabel">
        <input
          className="UploadFormInput"
          onChange={changeHandler}
          type="file"
        />
        <span>
          <FontAwesomeIcon size="3x" icon={faUpload} />
        </span>
      </label>
      <div className="Output">
        {error && <div className="Error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
