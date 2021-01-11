import {combineReducers} from 'redux'
import producst from './products'
import liders from './liders'
import sales from './sales'

const rootReducers=combineReducers({
    producst,
    liders,
    sales
})

export default rootReducers;