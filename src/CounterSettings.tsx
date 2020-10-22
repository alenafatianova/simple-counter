import React, {useState, ChangeEvent} from 'react'
import s from './CounterSettings.module.scss'
import CounterSettingsButton from './CounterSettingsButton'

type CounterType  = {
    maxValue: number
    startValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    onClickSet: (startValue: number, maxValue: number) => void
}

export default function CounterSettings(props: CounterType) {

const [startValue, setStartValue] = useState<number>(0)
const [maxValue, setMaxValue] = useState<number>(5)
const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => setStartValue(Number(e.currentTarget.value))
const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))

    return (
        <div className={s.wrapper}>
            <div className={s.screen}>
                <div>
                    <span>max value </span>
                    <input 
                    onChange={onChangeMax}
                    value={maxValue}
                    type="number" 
                    className={maxValue >= 0 && maxValue > startValue ? s.inputDefault : s.error  }  />
                </div>
                <div>
                    <span>start value</span>
                    <input
                        onChange={onChangeStart}
                        value={startValue}
                        type="number" 
                        className={startValue >= 0 && startValue < maxValue ? s.inputDefault : s.error }/>
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
