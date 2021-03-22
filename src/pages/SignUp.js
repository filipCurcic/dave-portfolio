import React, { useState, useCallback } from 'react';
import '../styles/login/login.scss';
import '../styles/_global.scss';
import { TextField, Button } from '@material-ui/core';
import { auth } from '../firebase/config';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="login flex flex-c flex-fd-c">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignUp} className="login__form flex flex-fd-c">
        <TextField name="email" label="Email" />
        <TextField name="password" label="Password" type="password" />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
