import React from 'react'
import s from './counter.module.scss'
import Buttons from './Buttons'

type PropsType = {
    title: string
}

export default function CountUp(props:PropsType) {

return (
        <div>
           <div className={s.classCount}>
        <div>{props.title}</div>
        <Buttons />   
        </div>
        </div>
    )
}
