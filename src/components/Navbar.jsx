import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const {user, logIn, logOut} = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="flex-between text-xl font-semibold mb-6 bg-white shadow-lg  rounded-lg sm:px-6 px-2 py-2">
      <div className="px-2 mr-2 border-r">
        <img className="w-16 " src={logo} alt="" />
      </div>
      <div className="">
       
        {user?.uid ? (
          <NavLink onClick={logOut} to="/login">Log Out</NavLink>
        ) : (
          <NavLink onClick={logIn} to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
