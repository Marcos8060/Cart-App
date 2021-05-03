import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import CartItem from './CartItem'
import {Row,Col,Button} from 'react-bootstrap'

const CartContainer = () => {
    const {cart,total,clearCart} = useContext(GlobalContext);

    if(cart.length === 0){
        return (
            <div className='empty'>
              <h2>Your Bag</h2>
              <h6>Is currently empty</h6>
            </div>
        )
    }
    return (
        <>
           {cart.map((item)=>(<CartItem key={item.id} item={item}/>))}
           <div className='foot'>
           <Row className='top'>
             <Col>
               <h4>Totals</h4>
             </Col>
             <Col>
              <Button onClick={clearCart}>Clear Cart</Button>
             </Col>
             <Col>
               <h5>${total}</h5>
             </Col>
           </Row>
           </div>
        </>
    )
}

export default CartContainer
