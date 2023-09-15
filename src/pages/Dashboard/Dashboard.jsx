import { FaHome, FaMoneyBill, FaServer, FaUsers } from "react-icons/fa";
import { FaBars, FaSackDollar } from "react-icons/fa6";
import useAdmin from "../../components/hooks/useAdmin";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNav from "../../components/DashboardNav";
import Loading from "../../components/Loading";
import { motion } from "framer-motion" 
const Dashboard = () => {
  const [isOpenDashboard, setIsOpenDashboard] = useState(false);
  const { isAdmin, isAdminLoading } = useAdmin();

  const toggleDashboardHandler = () => {
    if (isOpenDashboard) {
      setIsOpenDashboard(false);
    } else {
      setIsOpenDashboard(true);
    }
  };

  const adminRoutes = [
    {
      id: 1,
      icon: FaHome,
      title: "Admin Home",
      route: "/dashboard/admin_home",
    },
    {
      id: 1,
      icon: FaUsers,
      title: "Manage Users",
      route: "/dashboard/manage_users",
    },
    {
      id: 2,
      icon: FaServer,
      title: "Manage Resources",
      route: "/dashboard/manage_resources",
    },
    {
      id: 3,
      icon: FaSackDollar,
      title: "Masjid Fund",
      route: "/dashboard/masjid_fund",
    },
  ];
  const userRoute = [
    {
      id: 1,
      icon: FaServer,
      title: "My Resources",
      route: "/dashboard/my_resources",
    },
    {
      id: 2,
      icon: FaMoneyBill,
      title: "Payment History",
      route: "/dashboard/payment_history",
    },
  ];
  if (isAdminLoading) {
    return <Loading></Loading>;
  }
  
  return (
    <>
      <button
        onClick={toggleDashboardHandler}
        className="w-9 h-9 lg:hidden active:bg-blue-100 rounded-full overflow-hidden flex-center">
        <FaBars size={25}></FaBars>
      </button>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
        id="sideNav"
        className={`lg:block ${
          isOpenDashboard ? "" : "hidden "
        } bg-white max-w-xs h-screen fixed  border-none rounded-e-lg`}>
        {/* Items */}
        <button className="w-9 h-9 active:bg-blue-100 rounded-full overflow-hidden lg:flex-center hidden">
          <FaBars size={25}></FaBars>
        </button>
        <div className="p-4 space-y-4">
          {isAdmin
            ? adminRoutes?.map((admin) => (
                <DashboardNav
                  key={admin?.id}
                  title={admin?.title}
                  route={admin?.route}
                  ICON={admin?.icon}
                />
              ))
            : userRoute?.map((admin) => (
                <DashboardNav
                  key={admin?.id}
                  title={admin?.title}
                  route={admin?.route}
                  ICON={admin?.icon}
                />
              ))}
        </div>
      </motion.div>
      <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
