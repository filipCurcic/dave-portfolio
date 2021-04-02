import React, { useState } from 'react';
import '../styles/contact/contact.scss';
import { motion } from 'framer-motion';
import AnimatedParagraph from '../components/ui/AnimatedParagraph';
import { TextField, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(true);

    emailjs
      .sendForm(
        'service_6ng2ntc',
        'template_xfk8swq',
        e.target,
        'user_b4CFoaxUu94dwnYLcHqAx'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact flex">
      <div className="contact__leftContainer">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.75 }}
        >
          Hi, i'm Dave
        </motion.h1>
        <AnimatedParagraph delay={0.7}>
          <h3>I'm a landscape photographer</h3>
        </AnimatedParagraph>
        <br />
        <AnimatedParagraph delay={1.5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          quisquam harum, totam perferendis?
        </AnimatedParagraph>
        <br />
        <AnimatedParagraph delay={1.9}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          quisquam harum, totam perferendis? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Maxime quisquam harum, totam
          perferendis?
        </AnimatedParagraph>
        <br />
        <br />
        <AnimatedParagraph delay={2.3}>Want to get in touch?</AnimatedParagraph>
      </div>
      <motion.div
        className="contact__rightContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, ease: 'easeOut', duration: 0.75 }}
      >
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <motion.div
            transition={{ delay: 3.2, ease: 'easeOut', duration: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="contact__rightContainer__formTopContainer flex"
          >
            <TextField
              style={{ width: '47.5%', marginTop: '4em' }}
              name="name"
              placeholder="First Name"
              variant="outlined"
            />
            <TextField
              style={{ width: '47.5%', marginTop: '4em' }}
              name="email"
              placeholder="Email Address"
              variant="outlined"
            />
          </motion.div>
          <motion.div
            transition={{ delay: 3.5, ease: 'easeOut', duration: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="contact__rightContainer__formBottomContainer"
          >
            <TextField
              style={{ width: '100%', marginTop: '2em' }}
              multiline
              rows={4}
              name="message"
              placeholder="Your Message"
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              {' '}
              Contact{' '}
            </Button>
          </motion.div>
        </form>
      </motion.div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Message Sent"
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

export default Contact;
