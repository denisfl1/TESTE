import {createContext, useContext, useState} from "react";


export const AppContext = createContext()


export const AppProvider = (({children})=>{

const [data,setData] = useState('Denis')


return(

    <AppContext.Provider value={{children,data}}>

        {children}

    </AppContext.Provider>


)



})
