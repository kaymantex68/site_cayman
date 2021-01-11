import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import Liders from '../components/Liders/Liders.jsx'



const mapStateToProps =(state)=>({
    
    Liders: state.producst.items,
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(productsActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(Liders)