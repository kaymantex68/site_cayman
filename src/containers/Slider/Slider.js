import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as sliderActions from '../../actions/slider'
import Slider from '../../components/Slider2/Slider.jsx'



const mapStateToProps = (state) => ({
    Slides: state,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(sliderActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)