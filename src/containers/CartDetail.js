import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart'
import uniqBy from 'lodash/uniqBy'


import CartDetail from '../components/CartDetail/CartDetail.jsx'





const mapStateToProps = ({ cart }) => {
    return {
        cartUniq: uniqBy(cart.items, o => o.model),
        cartCount: cart.items.length,
        cartSumm: cart.items.reduce((count, product) => count + product.coast, 0)
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)