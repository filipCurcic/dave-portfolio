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
          Hi, I’m David
        </motion.h1>

        <AnimatedParagraph delay={0.7}>
          <h3>
            I am a photographer and videographer based in Cumbria, England. I
            started taking photos around 2013 when I got my first camera and it
            has been a hobby ever since, with a dream of turning it into my
            full-time job.
          </h3>
        </AnimatedParagraph>
        <br />
        <AnimatedParagraph delay={1.1}>
          This portfolio shows a combination of examples of my work and photos I
          have taken in my own time.
        </AnimatedParagraph>
        <br />
        <AnimatedParagraph delay={1.5}>
          I am also offering different services for anyone after their own
          photos, using a combination of knowledge and quality equipment I can
          provide a range of specialist photographic options including super
          high-resolution landscape images, 360-degree panoramas and more. My
          video services are primarily aimed at promotional videos but I am more
          than happy to be part of any project.
        </AnimatedParagraph>
        <br />
        <AnimatedParagraph delay={1.9}>
          Please get in touch if you would like to discuss any of my work or if
          you are interested in purchasing any of my photos.
        </AnimatedParagraph>
        <br />
        <br />
      </div>
      <motion.div
        className="contact__rightContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, ease: 'easeOut', duration: 0.75 }}
      >
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <motion.div
            transition={{ delay: 2.9, ease: 'easeOut', duration: 0.75 }}
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
            transition={{ delay: 3.3, ease: 'easeOut', duration: 0.75 }}
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
