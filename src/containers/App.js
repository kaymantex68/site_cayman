import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import * as sliderActions from '../actions/slider'
import App from '../components/App'




const mapStateToProps =(state)=>({
    products: state.producst.items,
    slides: state.slider.items,
    
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(productsActions,dispatch),
    ...bindActionCreators(sliderActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)