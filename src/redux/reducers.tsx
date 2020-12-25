import {ACTIONS_TYPE} from './actions'
import {StoreCounter} from './state'


type CounterType = {
    title: string
    maxValue: number
    startValue: number
    count: number
    error: string
}
export type CounterState = {
    counter: Array<CounterType>
}


export const counterReducer = (state: CounterState = StoreCounter, action: any) => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_VALUE: {
            return {
                ...state,
                ...action.payload
            }
        }
         case ACTIONS_TYPE.RESET_VALUE: {
             return {
                 ...state,
                 ...action.payload
             }
         }   
        case ACTIONS_TYPE.SET_VALUE: {
            return {
                ...state,
                ...action.payload
            }
        } 
        default:
            return state;
    }
}
