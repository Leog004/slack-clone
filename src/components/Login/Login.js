import React from 'react'
import { LoginContainer, LoginInnerContainer } from './styledLogin'
import { Button } from '@mui/material'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const auth = getAuth(); // Get the Auth service for the default app
    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        // Sign in with Google
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    } 

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
            <h1>Sign in to the Slack Clone</h1>
            <p>slack-clone-youtube.slack.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer> 
  )
}

export default Login