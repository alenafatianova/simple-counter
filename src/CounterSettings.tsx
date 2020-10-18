import React, {useState} from 'react'
import s from './CounterSettings.module.scss'

export type CounterType = {
    value: number
}



export default function CounterSettings(props: CounterType) {

    const [value, setValue] = useState(0)
    return (
        <div className={s.wrapper}>
            <div className={s.screen}>
                <span>max value</span>
                <input type="number" className={s.inputStyle}  />
                <div>
                    <span>start value</span>
                    <input type="number"  className={value < 0 ? s.inputStyle : ''}  />
                </div>
            </div>
            <div className={s.setButton}>
                <button onClick={() => {}}>set</button>
            </div>
        </div>
    )
}
