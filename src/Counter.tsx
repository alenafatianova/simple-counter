import React from "react";
import s from "./counter.module.scss";
import CounterSettingsButton from "./CounterSettingsButton";

type PropsType = {
  title: string
  maxValue: number
  startValue: number
  count: number
  setCount: (startValue: number) => void
};

export default function CountUp(props: PropsType) {

  let Inc = () => props.setCount(props.count + 1);
  let reset = () => props.setCount(props.startValue);

  return (
    <div>
      <div className={s.classCount}>
        <div>{props.title}</div>
        <div className={props.count === props.maxValue ? s.disable : ""}>
          <div className={s.count} >
            {props.count } 
            </div>
          <CounterSettingsButton  
            title={'inc'} 
            onClickSet={Inc} 
            disabled={props.count === props.maxValue} 
            maxValue={props.maxValue}
            startValue={props.startValue}
            />
          <CounterSettingsButton  
            title={'reset'} 
            onClickSet={reset} 
            disabled={props.count === props.startValue} 
            maxValue={props.maxValue}
            startValue={props.startValue}
            />
          {/* <Buttons 
            Inc={Inc} 
            count={props.startValue} 
            reset={reset} /> */}
        </div>
      </div>
    </div>
  );
}
