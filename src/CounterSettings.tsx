import React, {useState, ChangeEvent} from 'react'
import { createSecureContext } from 'tls'
import s from './CounterSettings.module.scss'





export default function CounterSettings() {

const [value, setValue] = useState(0)
let [start, setStart] = useState<number>()



    return (
        <div className={s.wrapper}>
            <div className={s.screen}>
                <span>max value</span>
                <input 
                type="number" 
                className={value < 0 ? s.error : s.inputDefault}  />
                <div>
                    <span>start value</span>
                    <input 
                        type="number" 
                        className={s.inputDefault}/>
                </div>
            </div>
            <div className={s.setButton}>
                <button>set</button>
            </div>
        </div>
    )
}
