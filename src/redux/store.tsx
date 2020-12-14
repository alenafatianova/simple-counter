import {createStore, combineReducers } from 'redux' 


export const reducers = combineReducers({
    counter: counterReducers,
})
export const store = createStore(reducers)