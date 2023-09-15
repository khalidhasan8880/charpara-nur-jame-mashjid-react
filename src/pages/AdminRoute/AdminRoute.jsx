import { Navigate } from "react-router-dom";
import useAdmin from "../../components/hooks/useAdmin";
import useAuth from "../../components/hooks/useAuth";
import Loading from "../../components/Loading";

const AdminRoute = ({children}) => {
    const {user, loading, logOut} = useAuth()
    const {isAdmin} = useAdmin()
   if (loading) {
    return <Loading></Loading>
   }
   if (user && isAdmin) {
    return children
   }else{
    <Navigate to='/login'></Navigate>
   }
  
    
};

export default AdminRoute;



{/* <Navbar
className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
<FaUsers></FaUsers>
<span className="-mr-1 font-medium"> Manage User</span>
</Navbar>
<Navbar
className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
<FaServer></FaServer>
<span className="-mr-1 font-medium"> Manage Resources</span>
</Navbar>
<Navbar
className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
<FaSackDollar></FaSackDollar>
<span className="-mr-1 font-medium"> Masjid Fund</span>
</Navbar> */}