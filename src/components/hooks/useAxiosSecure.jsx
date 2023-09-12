import { useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';


const useAxiosSecure = () => {
  // const { logOut } = useAuth(); 
  // const navigate = useNavigate(); 
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
  });
  
  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Handle unauthorized access here, e.g., logout and redirect
          // await logOut();
          // navigate('/login');
        } else {
          // Handle other errors (e.g., network issues) here
          // You can log or display an error message as needed
          console.error('An error occurred:', error);
        }
        return Promise.reject(error);
      }
    );

    // Clean up the interceptors when the component unmounts
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };

  
  });

  return [axiosSecure]
};

export default useAxiosSecure;
