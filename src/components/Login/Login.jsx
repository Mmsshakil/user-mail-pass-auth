import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


    // error showing
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef(null);


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);


        // login error reset
        setLoginError('');

        // validation need to add

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result, 'success');
                setLoginError('success');
            })
            .catch(error => {
                // console.log(error.message);
                setLoginError(error.message);
            })

    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        const emailRegex = /[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;

        if(!email.match(emailRegex)){
            console.log('provide a valid email');
            return;
        }

        // console.log('send code', emailRef.current.value);

        // sent velidation message to the mail
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Reset password message sent');
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {
                            loginError && <p className="text-center">{loginError}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <div className="text-center mb-3">
                        <p>New to this page ? Please <Link to="/register">Register</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;