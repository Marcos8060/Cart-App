

export default (state,action)=>{
    if(action.type === 'INCREASE'){
        let tempcart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return {...cartItem,
                        amount:cartItem.amount + 1}
            }
            return cartItem
        })
          return {...state,cart:tempcart}
    }
    if(action.type === 'DECREASE'){
        let tempcart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
            return {...cartItem,amount:cartItem.amount -1}
            }
            return cartItem
        })
        return {...state,cart:tempcart}
    }
    if(action.type === 'GET_TOTALS'){
        let {total,amount} = state.cart.reduce((cartTotal,
            cartItem)=>{
                const {price,amount} = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount
                return cartTotal;
            },{
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2))

        return {...state,total,amount}
    }
    switch(action.type){
       case 'REMOVE_ITEM':
           return {...state,
                   cart:state.cart.filter((cartItem)=> cartItem.id !== action.payload)}
        case 'CLEAR_CART':
            return {...state,
                    cart:[]}
     default:
         return state;
    }
}