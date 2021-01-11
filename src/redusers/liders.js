const initialState = {
    items: [],
    productsReady: false,
}

const liders = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIDERS':
            return {
                ...state,
                items: action.payload,
                productsReady: true,
            }

        default:
            return state;
    }
}

export default liders;