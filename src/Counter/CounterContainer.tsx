import React from 'react'
import {Counter} from './Counter'
import s from "./counter.module.scss";

type PropsType = {
    title: any
    maxValue: number
    startValue: number
    count: number
    setCount: (startValue: number) => void
    error: string
  };

export function CounterContainer(props: PropsType) {

    return (
        <div className={s.classCount}>
            <div className={props.count === props.maxValue ? s.disable : ""}></div>
            <Counter title={props.title} 
                    maxValue={props.maxValue}  
                    startValue={props.startValue} 
                    setCount={props.setCount} 
                    count={props.count}
                    error={props.error} />
        </div>
    )
}
