import React,{useContext} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

const CartItem = ({item}) => {
    const {removeItem,increase,decrease} = useContext(GlobalContext)
    return (
        <>
         <Row>
           <Col>
             <img src={item.img} alt={item.title} className='img'/>
           </Col>
           <Col>
             <h6 className='title'>{item.title}</h6>
             <h5>${item.price}</h5>
             <Button onClick={()=>removeItem(item.id)}>Remove</Button>
           </Col>
           <Col>
             <Button onClick={()=>increase(item.id)} className='top'>
               +
            </Button>
            <h6>{item.amount}</h6>
           <br/>
           <Button onClick={()=>decrease(item.id)}>
               -
           </Button>
           </Col>
         </Row>
        </>
    )
}

export default CartItem
