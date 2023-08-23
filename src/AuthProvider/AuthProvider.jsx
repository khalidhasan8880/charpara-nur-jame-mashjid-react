import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const AuthContext = createContext(null);
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // quran audios
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const MediaPlayer = ()=>{
    return <div className="text-4xl">
      hello
    </div>
  }
// auth information
  const authInfo = {
    allChapterInfo,
    isLoading,
    googleSignInHandler,
    MediaPlayer
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
