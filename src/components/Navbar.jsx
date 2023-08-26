import { NavLink } from "react-router-dom";
import logo from '/logo.png'
const Navbar = () => {
  return (
    <nav className="flex-between container mx-auto text-xl font-semibold my-3">
      <div className="px-2 mr-2 border-r"><img className="w-16 " src={logo} alt="" /></div>
      <div className="">
        {/* <NavLink to='/registration'>Sign Up</NavLink> */}
        <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
