import React  from 'react'
import s from './ButtonSettings.module.scss'


export type ButtonSettingType = {
    disabled: boolean
    title: string
    onClickSet: () => void
}

export default function CounterSettingsButton(props: ButtonSettingType) {
    return (
        <div>
            <div className={s.setButton}>
                <button 
                    onClick={props.onClickSet} 
                    disabled={props.disabled}
                    >
                    {props.title}
                </button>
            </div>
        </div>
    )
}
