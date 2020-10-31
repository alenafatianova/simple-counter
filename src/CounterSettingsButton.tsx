import React, { MouseEvent } from 'react'
import s from './ButtonSettings.module.scss'
import {Button} from '@material-ui/core'


export type ButtonSettingType = {
    disabled: boolean
    title: string
    startValue: number
    maxValue: number
    onClickSet: (startValue: number, maxValue: number) => void
}

export default function CounterSettingsButton(props: ButtonSettingType) {
    return (
        <div>
            <div className={s.setButton}>
                <Button 
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    props.onClickSet(props.startValue,props.maxValue )}} 
                    disabled={props.disabled}
                    variant={'contained'}
                    >
                    {props.title}
                </Button>
            </div>
        </div>
    )
}
