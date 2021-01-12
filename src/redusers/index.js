import {combineReducers} from 'redux'
import producst from './products'
import liders from './liders'
import sales from './sales'
import slider from './slider'
import dillers from './dillers'

const rootReducers=combineReducers({
    producst,
    liders,
    sales,
    slider,
    dillers,
})

export default rootReducers;