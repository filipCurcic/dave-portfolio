import React, { useCallback, useState } from 'react';

//material
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import '../../styles/videoUpload/videoUpload.scss';
import { Button, Divider } from '@material-ui/core';
import { projectFirestore } from '../../firebase/config';

const VideoUploadForm = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (event) => {
    const collectionRef = projectFirestore.collection('videos');
    event.preventDefault();
    const { title, url, description } = event.target.elements;
    try {
      await collectionRef.add({
        title: title.value,
        url: url.value,
        description: description.value,
      });
      setOpen(true);
    } catch (error) {
      alert(error);
    }
    // setOpen(false);
  };
  return (
    <div className="videoUpload">
      <Accordion>
        <form onSubmit={handleSubmit}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Upload</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className="videoUpload__formContainer flex flex-fd-c">
              <div className="videoUpload__formContainer__topRow flex">
                <TextField label="Title" name="title" />
                <TextField
                  name="url"
                  label="Url"
                  helperText="Public Youtube URL to your video."
                />
              </div>
              <div className="videoUpload__formContainer__bottomRow">
                <TextField
                  name="description"
                  label="Description"
                  helperText="Short description"
                />
              </div>
            </div>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small">Cancel</Button>
            <Button type="submit" size="small" color="primary">
              Save
            </Button>
          </AccordionActions>
        </form>
      </Accordion>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Video Added"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default VideoUploadForm;
