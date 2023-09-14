import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import api from "./interceptors"

const useAdmin = ()=>{
    const {user, loading} = useContext(AuthContext)

  const {data,isLoading}= useQuery({
    enabled:!!user?.email && !loading,
    queryKey:['demoaxios'],
    queryFn:async ()=> {
     const res = await api.post(`/demo/axios?email=${user?.email}`)
     return res?.data
    }
  })
  if (!isLoading) {
    return data
  }
}

export default useAdmin