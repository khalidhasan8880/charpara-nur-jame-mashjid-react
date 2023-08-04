import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const { data:allChapterInfo, isLoading } = useQuery({
        queryKey: ["quran"],
        queryFn: async () => {
          const res = await fetch(
            "https://api.quran.com/api/v4/chapters?language=bn"
          );
          return res.json();
        },
      });
    const authInfo = {
        allChapterInfo,
        isLoading,

    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;