import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { googleSignInHandler } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
  };

  const googleLogin =()=>{
    googleSignInHandler().then(() => {
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <section className="flex-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Login form here */}
        <form className="space-y-4" onSubmit={loginHandler}>
          <div>
            <label htmlFor="username" className="block font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full border rounded-lg px-3 py-2"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>

        <div className="text-center mt-3">----------- Or -----------</div>
        {/* -----or------- */}
        <button onClick={googleLogin} className="block mx-auto mt-3">
          <FaGoogle size={50}></FaGoogle>
        </button>
      </div>
    </section>
  );
};

export default Login;

{
  /* Inside the LoginPage component */
}
