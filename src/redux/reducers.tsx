import {ACTIONS_TYPE} from './actions'

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

export const intialCounter: CounterState = {
 counter: [
    { title: 'Counter',
     maxValue: 5,
     startValue: 0, 
     count: 50,
     error: ''
    }
 ]
}
export const counterReducer = (state: CounterState = intialCounter, action: any) => {
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
            
        default:
            return state;
    }
}