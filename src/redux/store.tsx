import {createStore, combineReducers } from 'redux' 
import {counterReducer} from './reducers'

export const reducers = combineReducers({
    count: counterReducer,
})
export const store = createStore(reducers)