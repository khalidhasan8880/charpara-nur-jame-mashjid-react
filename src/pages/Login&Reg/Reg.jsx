import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Reg = () => {
    const {createUser} = useContext(AuthContext)
    console.log(createUser);
    Navigate
  const [showPassword, setShowPassword] = useState(false);
  const regHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(()=>{
      return <Navigate to='/'></Navigate>
    }).catch(()=>{
      
    })
  };
  const { googleSignInHandler } = useContext(AuthContext);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="flex-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {/* Register form here */}

        <form action="" className="space-y-4" onSubmit={regHandler}>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
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
            className="w-full bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600">
            Register
          </button>
        </form>
        <div className="text-center mt-3">----------- Or -----------</div>
        {/* -----or------- */}
        <button onClick={googleSignInHandler} className="block mx-auto mt-3">
          <FaGoogle size={50}></FaGoogle>
        </button>
      </div>
    </section>
  );
};

export default Reg;
