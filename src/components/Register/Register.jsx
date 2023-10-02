import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import { FiEyeOff, FiEye } from 'react-icons/fi';

const Register = () => {

    // password velidation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;


    // error showing
    const [registerError, setRegisterError] = useState('');

    // seccess showing
    const [success, setSuccess] = useState('');

    // password show or not 
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email , password);

        // reset error
        setRegisterError('');

        // reset success
        setSuccess('');

        // password check
        if (!passwordPattern.test(password)) {
            setRegisterError('Password must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one special symbol, and one digit (0-9).');
            return;
        }



        // user creating
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Success Registration');
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
                <input className="p-1 mb-2" type="email" name="email" id="email" placeholder="Email..." required />
                <br />
                <div className="flex mx-auto justify-center items-center">
                    <input className="p-1 mb-2"
                        type={showPassword ? "text" : "password"}
                        name="password" id="pass" placeholder="Password..." required />

                    {/* show te click korle setshowpass call kore showpass ar man change kore dibe */}
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>
                        }
                    </span>
                </div>

                <br />
                <input className="btn btn-primary mb-3" type="submit" value="Register" />
            </form>

            {
                registerError && <p className="text-red-700 text-lg mb-3">{registerError}</p>
            }
            {
                success && <p className="text-green-700 text-xl mb-3">{success}</p>
            }

        </div>
    );
};

export default Register;