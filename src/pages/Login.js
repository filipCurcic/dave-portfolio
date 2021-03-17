import React, { useCallback, useContext } from 'react';
import '../styles/login/login.scss';
import '../styles/_global.scss';
import { TextField, Button } from '@material-ui/core';
import { auth } from '../firebase/config';
import { Redirect } from 'react-router';
import { AuthContext } from '../auth/Auth';

const Login = ({ history }) => {
  const handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const signOut = () => {
    auth.signOut();
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser);
    // return <Redirect to="/" />;
    return (
      <div className="login flex flex-c flex-fd-c">
        <h1>You are signed in</h1>
        <form onSubmit={signOut} className="login__form flex flex-fd-c">
          <Button variant="contained" type="submit">
            Sign out
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="login flex flex-c flex-fd-c">
      <h1>Sign In</h1>

      <form onSubmit={handleSignIn} className="login__form flex flex-fd-c">
        <TextField name="email" placeholder="Email" />
        <TextField name="password" placeholder="Password" type="password" />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
