import {createStore, combineReducers } from 'redux' 
import {counterReducer} from './reducers'


export const reducers = combineReducers({
    counter: counterReducer
})
export const store = createStore(reducers)
export type AppStateType = ReturnType<typeof reducers>