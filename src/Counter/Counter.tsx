import React from "react";
import s from "./counter.module.scss";
import CounterButton from "../CounterButtons/CounterButton";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../redux/state";
import { IncrementValueAC, ResetValueAC } from "../redux/reducers";


type PropsType = {
  title: any
  maxValue: number
  startValue: number
  error: string
};

export function Counter(props: PropsType) {
  const count = useSelector<AppStateType, number>(state => state.counter.count)  
const dispatch = useDispatch()
  let Inc = () => {
      dispatch(IncrementValueAC())
  };
  let reset = () => {
    dispatch(ResetValueAC())
  }
  

  return (
    <div>
      <div className={s.classCount}>
        <div className={s.counterTitle}>{props.title}</div>
        <div className={count === props.maxValue ? s.disable : ""}>
          <div className={props.error ? s.disable : ''} >
            {props.error ? props.error : count}
            </div>

          <CounterButton  
            title={'inc'} 
            onClickSet={Inc} 
            disabled={count === props.maxValue} 
           
          /> 
          <CounterButton  
            title={'reset'} 
            onClickSet={reset} 
            disabled={count === props.startValue} 
          
            />
        </div>
      </div>
    </div>
  );
}
