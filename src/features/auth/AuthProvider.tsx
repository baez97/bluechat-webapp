import { PropsWithChildren, createContext, useContext } from "react";

const AuthContext = createContext({
  userId: "3",
});

export const AuthProvider = (props: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{ userId: "3" }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
