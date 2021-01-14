export const addProductToCart = (obj) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: obj
})

export const setCart = (product) => ({
    type: 'SET_CART',
    payload: product
})
