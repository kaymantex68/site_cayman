const initialState = {
    items: [],
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                items: [],
            }
        case 'ADD_PRODUCT_TO_CART':
            return {
                items: [...state.items, action.payload],
            }
        // case "REMOVE_PRODUCT_FROM_CART":
        //     return {
        //         items: state.items.filter(items => items.id !== action.payload)
        //     }
        default:
            return state;
    }
}

export default cart;