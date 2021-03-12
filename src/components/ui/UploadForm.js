import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="uploadForm__output">
        {error && <div className="uploadForm__error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
