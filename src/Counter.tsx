import React, { useState } from "react";
import s from "./counter.module.scss";
import Buttons from "./Buttons";

type PropsType = {
  title: string;
};

export default function CountUp(props: PropsType) {
  let [count, setCount] = useState(0);

  let Inc = () => (count < 5 ? setCount(count + 1) : 0);
  let reset = () => (count === 5 ? setCount(0) : "");

  return (
    <div>
      <div className={s.classCount}>
        <div>{props.title}</div>
        <div className={count === 5 ? s.disable : ""}>
          <div className={s.count}>{count} </div>
          
          <Buttons 
            Inc={Inc} 
            count={count} 
            reset={reset} />
        </div>
      </div>
    </div>
  );
}
