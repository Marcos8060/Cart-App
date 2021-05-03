import React,{useReducer,createContext,useEffect} from 'react'
import cartItems from '../components/Data'
import reducer from './reducer'

export const GlobalContext = createContext()

const initialState = {
    cart: cartItems,
    amount: 0,
    total: 0
}

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    // actions
    const removeItem=(id)=>{
      dispatch({type: 'REMOVE_ITEM',payload: id})
    }
    const clearCart =()=>{
        dispatch({type: 'CLEAR_CART'})
    }
    const increase =(id)=>{
      dispatch({type: 'INCREASE',payload:id})
    }
    const decrease =(id)=>{
      dispatch({type: 'DECREASE',payload:id})
    }
    useEffect(()=>{
      dispatch({type: 'GET_TOTALS'})
    },[state.cart])
 return(
     <GlobalContext.Provider value={{
         ...state,
         removeItem,
         clearCart,
         increase,
         decrease
     }}>
        {children}
     </GlobalContext.Provider>
 )
}