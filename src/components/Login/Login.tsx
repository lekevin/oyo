import './Login.scss';
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
    const repeatPassword = document.querySelector('.repeat-password') as HTMLInputElement;

    if (formInputState.password === repeatPassword.value) {
        try {
            e.preventDefault();
            const { user } = await Auth.signUp({
                username: formInputState.username,
                password: formInputState.password,
                attributes: {
                    email: formInputState.email
                }
            });
            console.log(user);
            /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
            formState = 'confirmSignUp';
        } catch (err: any) {
            e.preventDefault();
            alert(err.message);
        }
    } else {
        e.preventDefault();
        document.querySelector('.passwordError')?.classList.remove('hidden');
    }
}

/* Sign in function */
async function signIn(e: any) {
    try {
        e.preventDefault();
        await Auth.signIn(formInputState.username, formInputState.password);
        /* Once the user successfully signs in, update the form state to show the signed in state */
        formState = 'signedIn';
    } catch (err) {
        console.log({ err });
    }
}

function toggleView() {
    //if I ever get un-lazy I'll turn this into a component with a state
    const repeatPassword = document.querySelector('.repeat-password');
    const email = document.querySelector('.email');
    const signIn = document.querySelector('.signin-text');
    const signUp = document.querySelector('.signup-text');
    const signIn1 = document.querySelector('.signin-text1');
    const signUp1 = document.querySelector('.signup-text1');
    const signIn2 = document.querySelector('.signin');
    const signUp2 = document.querySelector('.signup');

    repeatPassword?.classList.toggle('hidden');
    email?.classList.toggle('hidden');
    signIn?.classList.toggle('hidden');
    signUp?.classList.toggle('hidden');
    signIn1?.classList.toggle('hidden');
    signUp1?.classList.toggle('hidden');
    signIn2?.classList.toggle('hidden');
    signUp2?.classList.toggle('hidden');
}

export default function Login(user: any) {
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
                        <span className="signin-text hidden">Sign In</span>
                        <div className="name-wrapper">
                            <input name="username" className="name input" placeholder="Username" onChange={onChange}></input>
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
                        <div className="passwordError hidden">Passwords don't match.</div>
                        <div className="buttons">
                            <button className="signup button" onClick={signUp}>
                                Sign Up
                            </button>
                            <button className="signin button hidden" onClick={signIn}>
                                Sign In
                            </button>
                        </div>
                        <label onClick={toggleView} className="signup-text1">
                            Already have an account? Sign in
                        </label>
                        <label onClick={toggleView} className="signin-text1 hidden">
                            Need an account? Sign up
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}
