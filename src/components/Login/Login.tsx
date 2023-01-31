import './Login.scss';
import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);
/* Create the form state and form input state */
let formState = 'signUp';
let formInputState = { username: '', password: '', email: '' };
function onChange(e: any) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
}
/* Sign up function */
async function signUp(e: any) {
    try {
        e.preventDefault();
        console.log('working');
        await Auth.signUp({
            username: formInputState.username,
            password: formInputState.password,
            attributes: {
                email: formInputState.email
            }
        });
        console.log(formInputState.username);
        /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
        formState = 'confirmSignUp';
        console.log('hello');
    } catch (err) {
        e.preventDefault();
        console.log({ err });
    }
}

/* Sign in function */
async function signIn() {
    try {
        await Auth.signIn(formInputState.username, formInputState.password);
        /* Once the user successfully signs in, update the form state to show the signed in state */
        formState = 'signedIn';
    } catch (err) {
        console.log({ err });
    }
}
export default function Login() {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <img src="website.gif" alt="balls" className="balls" />
                    <h3 className="hero-left-text">
                        <span className="oyo">oyo</span>
                        <div className="left-text">
                            <span className="integrate">Integrate</span> into the greater systems within you.
                        </div>
                    </h3>
                </div>
                <div className="hero-right">
                    <form className="login-content">
                        <div className="logo-wrapper">
                            <span className="logo">
                                <span className="standout">o</span>wn <span className="standout">y</span>our <span className="standout">o</span>rg
                            </span>
                        </div>
                        <span className="signup-text">Sign Up</span>
                        <div className="name-wrapper">
                            <input name="username" className="name input" placeholder="Full Name" onChange={onChange}></input>
                        </div>
                        <div className="email-wrapper">
                            <input name="email" className="email input" placeholder="Email" onChange={onChange}></input>
                        </div>
                        <div className="password-wrapper">
                            <input name="password" className="password input" placeholder="Password" onChange={onChange}></input>
                        </div>
                        <div className="repeat-password-wrapper">
                            <input className="repeat-password input" placeholder="Repeat Password" onChange={onChange}></input>
                        </div>
                        <div className="buttons">
                            <button className="signup button" onClick={signUp}>
                                Sign Up
                            </button>
                            <button className="signin button" onClick={signIn}>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
