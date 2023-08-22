import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {googleSignInHandler} = useContext(AuthContext)
    const loginHandler = (e)=>{
        e.preventDefault()
    }

    return (
        <section className="flex-center">
            <form className="flex-center" onSubmit={loginHandler}>
                <button onClick={googleSignInHandler} className="o"><FaGoogle size={50}></FaGoogle></button>
            </form>
        </section>
    );
};

export default Login;