import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";

const Register = () => {


    // error showing
    const [registerError, setRegisterError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email , password);

        // reset error
        setRegisterError('');

        // user creating
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message);
            })

    }

    return (
        <div className="text-center border">
            <h2 className="text-2xl">Register here</h2>

            <form onSubmit={handleRegister} className="mt-3 text-center">
                <input className="p-1 mb-2" type="email" name="email" id="email" placeholder="Email..." />
                <br />
                <input className="p-1 mb-2" type="password" name="password" id="pass" placeholder="Password..." />
                <br />
                <input className="btn btn-primary mb-3" type="submit" value="Register" />
            </form>

            {
                registerError && <p className="text-red-700 text-2xl mb-3">{registerError}</p> 
            }

        </div>
    );
};

export default Register;