import React from "react";
import s from "./counter.module.scss";
import CounterButton from "../CounterButtons/CounterButton";


type PropsType = {
  title: any
  maxValue: number
  startValue: number
  count: number
  setCount: (startValue: number) => void
  error: string
};

export function Counter(props: PropsType) {

  let Inc = () => props.setCount(props.count + 1);
  let reset = () => props.setCount(props.startValue);
  

  return (
    <div>
      <div className={s.classCount}>
        <div className={s.counterTitle}>{props.title}</div>
        <div className={props.count === props.maxValue ? s.disable : ""}>
         
          <CounterButton  
            title={'inc'} 
            onClickSet={Inc} 
            disabled={props.count === props.maxValue} 
            maxValue={props.maxValue}
            startValue={props.startValue}
          /> 
          <CounterButton  
            title={'reset'} 
            onClickSet={reset} 
            disabled={props.count === props.startValue} 
            maxValue={props.maxValue}
            startValue={props.startValue}
            />
        </div>
      </div>
    </div>
  );
}

