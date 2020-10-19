import React from "react";
import s from './counter.module.scss';

export type ButtonsPropsType = {
  Inc: () => void
  count: number
  reset: () => void
}

export default function Buttons(props:ButtonsPropsType) {
  return (
    <div>
        <div className={s.buttonInc}>
          <button onClick={props.Inc} disabled={props.count === 5 ? true : false}>
            inc
          </button>
          <button onClick={props.reset} disabled={props.count === 0 ? true : false}>
            reset
          </button>
        </div>
      </div>
  );
}
