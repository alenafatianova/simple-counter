import s from "./counter.module.scss";
import React from 'react'
import {Counter} from './Counter'
import { connect } from 'react-redux'


type ContainerProps = {
    title: string
    maxValue: number
    startValue: number
    count: number
    setCount: (startValue: number) => void
    error: string
}

export const CounterContainer = (props: ContainerProps) => {

    <div className={props.error ? s.disable : ''} >
        {props.error ? props.error : props.count}
    </div>
    return (
        <div>
            <Counter 
                title={props.title} 
                maxValue={props.maxValue} 
                startValue={props.startValue}  
                count={props.count}
                setCount={props.setCount}
                error={props.error}
                />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    counter: state.counter,
    setValue: state.setValue,
    resetValue: state.resetValue
  })
  const mapDispatchToProps = () => {
    
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Counter)