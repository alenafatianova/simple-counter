export enum ACTIONS_TYPE {
    INCREMENT_VALUE = 'INCREMENT_VALUE',
    RESET_VALUE = 'RESET_VALUE',
    SET_VALUE = 'SET_VALUE',
}

export type IncrementValue = {
    type: ACTIONS_TYPE.INCREMENT_VALUE
    payload: {
       count: number
    }
} 

export type ResetValue = {
    type: ACTIONS_TYPE.RESET_VALUE
    payload: {
        startValue: number
    }
}
export type SetValue = {
    type: ACTIONS_TYPE.SET_VALUE
    payload: {
        setValue: number
    }
}
export const IncrementValueAC = (count: number): IncrementValue => ({type: ACTIONS_TYPE.INCREMENT_VALUE, payload:{count}})
export const ResetValueAC = (startValue: number): ResetValue => ({type: ACTIONS_TYPE.RESET_VALUE, payload: {startValue}})
export const SetValueAC = (setValue: number): SetValue => ({type: ACTIONS_TYPE.SET_VALUE, payload: {setValue}})