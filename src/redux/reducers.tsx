import { useDispatch as _useDispatch } from 'react-redux';

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: CounterActionsType) => dispatch(ac)
}

export enum ACTIONS_TYPE  {
    INCREMENT_VALUE = 'INCREMENT_VALUE',
    RESET_VALUE = 'RESET_VALUE',
    SET_START_VALUE = 'SET_START_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
}

const initialCounterState = {
    title: '',
    maxValue: 5,
    startValue: 0,
    count: 0,
}

type InitialStateType = {
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


export type CounterActionsType =  IncrementValueAC | ResetValueAC | SetStartValueAC | SetMaxValueAC


export const counterReducer = (state: InitialStateType = initialCounterState, action: CounterActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_VALUE: {
            return {
                ...state,
                count: action.count + 1
            }
        }
         case ACTIONS_TYPE.RESET_VALUE: {
             return {
                 ...state,
                 count: 0
             }
         }   
        case ACTIONS_TYPE.SET_START_VALUE: {
            return {
                ...state,
                startValue: action.startValue
            }
        } 
        case ACTIONS_TYPE.SET_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        default:
            return state;
    }
}

export const IncrementValueAC = (count: number) => ({type: ACTIONS_TYPE.INCREMENT_VALUE, count})
export const ResetValueAC = () => ({type: ACTIONS_TYPE.RESET_VALUE})
export const SetStartValueAC = (startValue: number) => ({type: ACTIONS_TYPE.SET_START_VALUE, startValue})
export const SetMaxValueAC = (maxValue: number) => ({type: ACTIONS_TYPE.SET_MAX_VALUE, maxValue})




