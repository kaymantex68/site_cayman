const initialState = {
    items: [],
    productsReady: false,
}

const sales = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SALES':
            return {
                ...state,
                items: action.payload,
                productsReady: true,
            }

        default:
            return state;
    }
}

export default sales;