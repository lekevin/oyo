import './Login.scss';

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
                            <input className="name input" placeholder="Full Name"></input>
                        </div>
                        <div className="email-wrapper">
                            <input className="email input" placeholder="Email"></input>
                        </div>
                        <div className="password-wrapper">
                            <input className="password input" placeholder="Password"></input>
                        </div>
                        <div className="repeat-password-wrapper">
                            <input className="repeat-password input" placeholder="Repeat Password"></input>
                        </div>
                        <div className="buttons">
                            <button className="signup button">Sign Up</button>
                            <button className="signin button">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
