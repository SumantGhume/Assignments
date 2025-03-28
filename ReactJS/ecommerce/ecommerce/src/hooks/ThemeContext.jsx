import React, { Children, createContext, useContext, useState } from 'react'

// export ThemeContext  

export const ThemeContext = createContext(null);
    
const ThemeProvider =({children}) =>{

    const[theme,setTheme] = useState('light')
    function toggleTheme (){
        setTheme((e) =>e == 'light' ? 'dark':'light')
    }



    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>

            {children}
        
        </ThemeContext.Provider>
    )
}

export default ThemeProvider