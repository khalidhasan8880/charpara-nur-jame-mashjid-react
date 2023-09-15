import { NavLink } from 'react-router-dom';

const DashboardNav = ({route, title, ICON}) => {
    console.log(ICON);
    return (
        <NavLink
      to={route}
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-sky-600 to-cyan-400 relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white"
          : " relative px-4 py-3 flex items-center space-x-4 rounded-lg"
      }>
      {/* <FaServer></FaServer> */}
      <ICON ></ICON>
      <span className="-mr-1 font-medium"> {title}</span>
    </NavLink>
    );
};

export default DashboardNav;


