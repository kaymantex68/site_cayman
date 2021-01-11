import {combineReducers} from 'redux'
import producst from './products'
import liders from './liders'
import sales from './sales'
import slider from './slider'

const rootReducers=combineReducers({
    producst,
    liders,
    sales,
    slider,
})

export default rootReducers;