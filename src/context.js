import React, {createContext} from 'react'


export const Theme = createContext();


const Mode=({children})=>{
    return(
        <Theme.Provider>
            {children}
        </Theme.Provider>
    )
}
export const Mode