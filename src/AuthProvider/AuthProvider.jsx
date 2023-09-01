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
    return await signInWithPopup(auth, googleProvider)
  };


 const createUser  = (email,password)=>{
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
             fetch('/l')

          } else {
              localStorage.removeItem('access-token')
              setUser(null)
              setLoading(false)
          }
      });

      return () => {
          unsubscribe()
      }
  }, [])
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
