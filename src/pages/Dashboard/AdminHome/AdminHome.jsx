import { useQuery } from "@tanstack/react-query";
import api from "../../../components/hooks/interceptors";
import useAuth from "../../../components/hooks/useAuth";
import Loading from "../../../components/Loading";

const AdminHome = () => {
    const {user} = useAuth()
    const {data, isLoading} = useQuery({
        queryKey:['websiteData'],
        queryFn: async()=>{
           const res = await api.get(`/website/data?email=${user?.email}`)
           console.log(res.data);
           return res.data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-white rounded-lg dark:text-gray-100 dark:bg-gray-900">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="grid grid-cols-1 sm:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700/75">
              <dl className="space-y-1 px-4 py-8">
                <dt className="text-4xl font-extrabold text-black dark:text-white">
                 {data?.totalUsers}
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                  Users
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-10">
                <dt className="text-4xl font-extrabold text-black dark:text-white">
                 {data?.totalResources}
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                  Resources
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-10">
                <dt className="text-4xl font-extrabold text-black dark:text-white">
                 {data?.totalApprovedResources}
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                  Approved Resources
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-10">
                <dt className="text-4xl font-extrabold text-black dark:text-white">
                 {data?.fund}
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                  Fund
                </dd>
              </dl>
              
            
            </div>
          </div>
        </div>
    );
};

export default AdminHome;