import React from 'react'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'

const CartDetail = (props) => {
    const { cartUniq } = props;
    // console.info('CART DETAIL PROPS: ', props)
    // console.info('CART DETATIL: ', cartUniq)
    return (
        <div className={classes.CartDetail_container}>
        <div className={classes.CartDetail_container_list_products}>
            {cartUniq.map((product, key) => {
                return (
                    <ProductCardInCart key={`Product_${key}`} {...product}/>
                )
            })}
            </div>
        </div>
    )
}

export default CartDetail;