import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // const navigate = useNavigate()
  
  // fetched surah from 2 different api's, this one is for surah details
  const { data: allChapterInfo, isLoading } = useQuery({
    queryKey: ["quran"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.quran.com/api/v4/chapters?language=bn"
      );
      return res.json();
    },
  });

  // google authentication
  const googleSignInHandler = async() => {
    setLoading(true)
    return await signInWithPopup(auth, googleProvider)
  };


 const createUser  = (email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 }

  const logIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
      })
  }
  const logOut = () => {
      setLoading(true)
      return signOut(auth)
  }



  const updateUser = (name) => {
      return updateProfile(auth.currentUser, {
          displayName: name
      }).then(() => {
          console.log('profile update success');
      }).catch(() => {
          console.log('profile update failed');
      })
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
              setUser(currentUser)
              setLoading(false)
             fetch('http://localhost:5000/jwt',{
              method:"POST",
              headers:{
                "content-type":"application/json",  
                // user:JSON.stringify()             
              },
              body:JSON.stringify({email:currentUser?.email, name:currentUser?.displayName})
            })
             .then((res)=>res.json())
             .then(data=>{
              localStorage.setItem('token', data?.token)
             
              console.log(currentUser);
              if (!loading) {
                fetch(`http://localhost:5000/users?email=${currentUser?.email}&name=${currentUser?.displayName}`,{
                  method:"POST",
                  headers:{
                    "Authorization": `Bearer ${data?.token}`,
                    'content-type':'application/json'
                  }
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data);
                })
              }             
             })

          } else {
              localStorage.removeItem('access-token')
              setUser(null)
              setLoading(false)
          }
      });

      return () => {
          unsubscribe()
      }
  }, [loading])
// auth information
  const authInfo = {
    allChapterInfo,
    isLoading,
    googleSignInHandler, 
    createUser,
    logIn,
    logOut,
    updateUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
