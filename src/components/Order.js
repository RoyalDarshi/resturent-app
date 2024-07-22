import React from 'react';

const Order = (props) => {
    const deleteOrder=()=>{
        props.deleteOrder(props.order.id,props.order.table);
    }
    return(
        <li>
            {props.order.price+"-"+props.order.table+"-"+props.order.dish}
            <button onClick={deleteOrder}>Delete Order</button>
        </li>
    )
}
export default Order;