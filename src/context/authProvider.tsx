import { useState } from 'react'
import { AuthContext } from './authContext'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({
    userId:0,
    userName:''
  })

  const updateToken = (data) => {setToken(data)}
  const updateUser = (data) => {setUser(data)}

  const value = {
    token,
    updateToken,
    user,
    updateUser
  }
  return (
      <>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </>
  )
}