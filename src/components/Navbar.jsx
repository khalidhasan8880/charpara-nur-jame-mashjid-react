import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Menu, Transition } from "@headlessui/react";
import { FaArrowRight, FaUser } from "react-icons/fa";
const Navbar = () => {
  const { user, logIn, logOut } = useContext(AuthContext);
  const contentSet = (content) => {};
  return (
    <nav className="flex-between text-xl font-semibold mb-6 bg-white shadow-lg  rounded-lg sm:px-6 px-2 py-2">
      <div className="px-2 mr-2 border-r">
        <img className="w-16 " src={logo} alt="" />
      </div>
      <div className=""></div>

      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2  font-medium ">
            <div className="rounded-full  p-2">
              <FaUser size={30}></FaUser>
            </div>
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-48 sm:w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <button
                onClick={() => contentSet("Bangla")}
                className={`group hover:bg-blue-100 transition flex-between w-full  rounded-md px-2 py-2 font-semibold`}>
                <div className="flex items-center">
                <div className="rounded-full  p-2">
                  <FaUser size={25}></FaUser>
                </div>{" "}
                Profile
                </div>
<div> 
  <FaArrowRight></FaArrowRight>
   </div>
              </button>
              <button
                onClick={() => contentSet("Bangla")}
                className={`group hover:bg-blue-100 transition flex-between w-full  rounded-md px-2 py-2 font-semibold`}>
                <div className="flex items-center">
                <div className="rounded-full  p-2">
                  <FaUser size={25}></FaUser>
                </div>{" "}
                <NavLink to='/dashboard'>Dashboard</NavLink>
                </div>
<div> 
  <FaArrowRight></FaArrowRight>
   </div>
              </button>
              <button
                onClick={() => contentSet("Bangla")}
                className={`group hover:bg-blue-100 transition flex-between w-full  rounded-md px-2 py-2 font-semibold`}>
                <div className="flex items-center">
                <div className="rounded-full  p-2">
                  <FaUser size={25}></FaUser>
                </div>{" "}
               Setting
                </div>
<div> 
  <FaArrowRight></FaArrowRight>
   </div>
              </button>
              {user?.uid ? (
                <NavLink
                  className="group hover:bg-blue-100 transition flex w-full items-center rounded-md px-2 py-2 font-semibold"
                  onClick={logOut}
                  to="/login">
                     <div className="rounded-full  p-2">
                  <FaUser size={25}></FaUser>
                </div>{" "}
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className="group hover:bg-blue-100 transition flex w-full items-center rounded-md px-2 py-2 font-semibold"
                  onClick={logIn}
                  to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
