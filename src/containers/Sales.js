import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import Sales from '../components/Sales/Sales.jsx'



const mapStateToProps =(state)=>({
    
    Sales: state.producst.items,
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(productsActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(Sales)