
const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);
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
        </div>
    );
};

export default Register;