import {  useDispatch as _useDispatch } from 'react-redux';


export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: CounterActionsType) => dispatch(ac)
}

export enum ACTIONS_TYPE  {
    INCREMENT_VALUE = 'INCREMENT_VALUE',
    RESET_VALUE = 'RESET_VALUE',
    SET_START_VALUE = 'SET_START_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_VALUE = 'SET_VALUE',
}

const initialCounterState = {
    title: '',
    maxValue: Number(localStorage.getItem('maxValue') || '5'),
    startValue: Number(localStorage.getItem('startValue' || '0')),
    count: 0,
}

export type InitialStateType = {
    maxValue: number
    startValue: number
    count: number
}

export type IncrementValueAC = {
    type: ACTIONS_TYPE.INCREMENT_VALUE
    count: number
}
export type ResetValueAC = {
    type: ACTIONS_TYPE.RESET_VALUE
    count: number
}

export type SetStartValueAC = {
    type: ACTIONS_TYPE.SET_START_VALUE
    startValue: number
}

export type SetMaxValueAC = {
    type: ACTIONS_TYPE.SET_MAX_VALUE
    maxValue: number
}

export type SetValueAC = {
    type: ACTIONS_TYPE.SET_VALUE
    maxValue: number
    startValue: number
}

export type CounterActionsType =  IncrementValueAC | ResetValueAC | SetStartValueAC | SetMaxValueAC | SetValueAC


export const counterReducer = (state: InitialStateType = initialCounterState, action: CounterActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_VALUE: {
            return {
               ...state,
                count: state.count + 1
            }
        }
        case ACTIONS_TYPE.SET_VALUE: {
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                count: action.startValue
            }
        }
            
        
         case ACTIONS_TYPE.RESET_VALUE: {
             return {
                 ...state,
                 count: state.startValue
             }
         }   
      
        default:
            return state;
    }
}

export const IncrementValueAC = () => ({
    type: ACTIONS_TYPE.INCREMENT_VALUE, 
})

export const ResetValueAC = () => ({
    type: ACTIONS_TYPE.RESET_VALUE
})


export const SetValueAC = (startValue: number, maxValue: number) => ({
    type: ACTIONS_TYPE.SET_VALUE,
    startValue,
    maxValue
})

