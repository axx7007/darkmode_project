import React, {createContext, useState} from 'react'


export const ThemeContext = createContext();


const Mode=({children})=>{
    const [theme, setTheme] = useState({
        icon: 'black',
        title: 'black',
        backgraound: 'white'
    })
    return(
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}
export default Mode