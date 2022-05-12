import { useState, createContext, useReducer } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

export const AppContext = createContext()

const reducer = (state, action) => {
  
  return {...state, newsApiQuery: action}
}


const BaseLayout = ({children})=>{
    const [showMenu, setShowMenu] = useState(false)

    const initialState = {
        newsApiQuery: ''
    }

    const [state, dispatch] = useReducer ( reducer , initialState)  

    
    return(
        <AppContext.Provider value={{state:'state', dispatch: 'dispatch'}}>
            <Header setShowMenu={setShowMenu} showMenu={showMenu}   />

            <div style={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                justifyContent :'space-between'
            }}>
                {
                    showMenu ? <Menu/> : null
                }
                
                {children}
            </div>
            
            
        </AppContext.Provider>
    )
}

export default BaseLayout;