import React, {useState, ChangeEvent} from 'react'
import s from './CounterSettings.module.scss'
import CounterSettingsButton from '../CounterButtons/CounterButton'



type CounterType  = {
    maxValue: number
    startValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    onClickSet: (startValue: number, maxValue: number) => void
    setError: (error: string)=> void
}

export  function CounterSettings(props: CounterType) {

const [startValue, setStartValue] = useState<number>(0)
const [maxValue, setMaxValue] = useState<number>(5)
const isValid = (startValue: number, maxValue: number) => {
    return startValue >= 0 && maxValue > startValue 
}
const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.currentTarget.value))
    isValid(startValue, maxValue) ? props.setError('') : props.setError('Invalid input')
}
const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value))
    isValid(startValue, maxValue) ? props.setError('') : props.setError('Invalid input')
}

    return (
        <div className={s.wrapper}>
            <div className={s.screen}>
                <div className={s.maxValue}>
                    <span>max value </span>
                    <input
                    onChange={onChangeMax}
                    value={maxValue}
                    type="number" 
                    className={maxValue >= 0 && maxValue > startValue ? s.inputDefault : s.error  }  
                    />
                </div>
                <div className={s.startValue}>
                    <span>start value</span>
                    <input
                        onChange={onChangeStart}
                        value={startValue}
                        type="number" 
                        className={startValue >= 0 && startValue < maxValue ? s.inputDefault : s.error }
                        />
                </div>  
                
            </div>
            <CounterSettingsButton 
                maxValue={maxValue}
                startValue={startValue}
                disabled={startValue < 0 || startValue >= maxValue} 
                title={'set'} 
                onClickSet={props.onClickSet}
                />
        </div>
    )
}
