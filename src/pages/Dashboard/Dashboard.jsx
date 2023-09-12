import { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import authFetch from "../../components/hooks/interceptors";
// import useAdmin from "../../components/hooks/useAdmin";

const Dashboard = () => {

  // const isAdmin = useAdmin()
  // console.log(isAdmin);

  const [axiosSecure] = useAxiosSecure()
  // useEffect(()=>{
  //   const res= ()=> axiosSecure.get('/demo/axios')
  // console.log(res)
  // },[axiosSecure])

  const {data}= useQuery({
    queryKey:['demoaxios'],
    queryFn:async ()=> {
     const res = await authFetch.post('/demo/axios')
     return res?.data
    }
  })
  console.log(data);
  // const res =async()=> axiosSecure.get('/demo/axios').then(res=>res?.data)
  // console.log(res)

    return (
        <>
        <div
          id="sideNav"
          className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
        >
          {/* Items */}
          <div className="p-4 space-y-4">
            <a
              href="#"
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            >
                <FaUsers></FaUsers>
              <span className="-mr-1 font-medium"> Manage User</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-wallet" />
              <span>Payment History</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-exchange-alt" />
              <span>Transacciones</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-user" />
              <span>Mi cuenta</span>
            </a>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
            >
              <i className="fas fa-sign-out-alt" />
              <span>Cerrar sesión</span>
            </a>
          </div>
        </div>
    <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
      helllo      
    </div>
      </>
      
    );
};

export default Dashboard;