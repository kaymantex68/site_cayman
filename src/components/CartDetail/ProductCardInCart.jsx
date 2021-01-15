import React from 'react'
import classes from './ProductCardInCart.module.css'

const ProductCardInCart = (props) => {
    console.info('CART PRODUct: ', props)
    const { model, brand, type, info, count, coast } = props;
    const { addProductToCart, removeProductFromCart, removePositionFromCart } = props;
    return (
        <div className={classes.ProductCard_container}>
            <div className={classes.ProductCard_picture}>
                <img className={classes.ProducCard_picture_img} alt={model} src={`/img_products/${brand}/${model}/1.png`} />
            </div>
            <div className={classes.ProductCard_description}>
                <p className={classes.Model_name}>{model}</p>
                <p className={classes.Model_description}>{type[0]}</p>
                <p className={classes.Model_description}>{info.text}</p>
                <p className={classes.Model_description}>{info.text1}</p>
            </div>
            <div className={classes.ProductCard_count}>
                <p className={classes.Model_description_count}>{count}</p>
            </div>
            <div className={classes.ProductCard_coast}>
                <p className={classes.Model_description_coast}>{`${coast} руб.`}</p>
            </div>
            <div className={classes.ProductCard_summ}>
                <p className={classes.Model_description_summ}>{`${coast * count} руб.`}</p>
            </div>
            <div className={classes.Buttons}>
                <div className={classes.ProductCard_button_minus}>
                    <p className={classes.button_minus} onClick={() => removeProductFromCart(props.model)}>-</p>
                </div>
                <div className={classes.ProductCard_button_plus}>
                    <p className={classes.button_plus} onClick={() => addProductToCart(props)}>+</p>
                </div>
                <div className={classes.ProductCard_button_remove}>
                    <p className={classes.button_remove} onClick={() => removePositionFromCart(props.model)}>удалить</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInCart;
