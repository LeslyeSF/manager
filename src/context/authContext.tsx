import { createContext, useContext } from "react";

interface createUser {
  userId: number
  userName: string
}

type authContextType = {
  token: string
  updateToken: any
  user: createUser
  updateUser: any
}

const authContextDefaultValues: authContextType = {
  token: null,
  updateToken: '',
  user:{
    userId: 0,
    userName: ''
  },
  updateUser: ''
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}