import React from 'react';
import '../styles/contact/contact.scss';
import { motion } from 'framer-motion';
import AnimatedParagraph from '../components/ui/AnimatedParagraph';
import { TextField, Divider, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

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
    </div>
  );
};

export default Contact;
