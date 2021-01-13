import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'


import DetailProduct from '../components/DetailProduct/DetailProduct.jsx'




const mapStateToProps = (state) => {
    return {
        products: state.producst.items,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)