export enum ACTIONS_TYPE {
    INCREMENT_VALUE = 'INCREMENT_VALUE',
    RESET_VALUE = 'RESET_VALUE'
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
export const IncrementValueAC = (count: number): IncrementValue => ({type: ACTIONS_TYPE.INCREMENT_VALUE, payload:{count}})
export const ResetValueAC = (startValue: number): ResetValue => ({type: ACTIONS_TYPE.RESET_VALUE, payload: {startValue}})