import React, { Children, createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null)

const AuthProvider =({childern}) =>{
    const [user,setUser] = useState('')
    useEffect(() =>{
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if(storedUser !== null){
            setUser(storedUser);
            console.log("**************",storedUser)
        }
    },[]);

    const login = (email,password)=>{
        if(email == storedUser.email && password == storedUser.password){
            setUser(storedUser.name)
        }
    }

    return(
        <AuthContext.Provider value={{user,login}}>
            {childern}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

