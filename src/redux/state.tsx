import {createStore, combineReducers } from 'redux' 
import {counterReducer} from './reducers'
import { CounterState } from './reducers'

export const StoreCounter: CounterState = {
 counter: [
        {
        title: '',
        startValue: 0,
        maxValue: 0,
        count: 0,
        error: ''}
 ]
   }

export const reducers = combineReducers({
    counter: counterReducer
})
export const store = createStore(reducers)