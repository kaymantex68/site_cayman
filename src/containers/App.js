import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import rootReducers from '../redusers';
import * as productsActions from '../actions/products'
import App from '../components/App'




const mapStateToProps =(state)=>({
    products: state.producst.items,
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(productsActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)