import React, {useState, ChangeEvent} from 'react'
import s from './CounterSettings.module.scss'
import CounterButton from '../CounterButtons/CounterButton'
import { useDispatch } from 'react-redux'
import { SetValueAC } from '../redux/reducers'




type CounterType  = {
    maxValue: number
    startValue: number
    // setStartValue: (startValue: number) => void
    // setMaxValue: (maxValue: number) => void
    setError: (error: string)=> void
}

export  function CounterSettings(props: CounterType) {

const dispatch = useDispatch()

const [startValue, setStartValue] = useState(props.startValue)
const [maxValue, setMaxValue] = useState(props.maxValue)

const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.currentTarget.value))
}
const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value))
}

const handleSet = () => {
 dispatch(SetValueAC(startValue,maxValue))
 
 localStorage.setItem('startValue', startValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
}

    return (
        <div className={s.wrapper}>
            <div className={s.screen}>
                <div className={s.maxValue}>
                    <span> max value </span>
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
            <CounterButton 
                disabled={startValue < 0 || startValue >= maxValue} 
                title={'set'} 
                onClickSet={handleSet}
                />
        </div>
    )
}

