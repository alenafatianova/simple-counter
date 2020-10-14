import React, { useState } from "react";
import s from "./counter.module.scss";

export default function Buttons() {
  let [count, setCount] = useState(0);

  let Inc = () => (count < 5 ? setCount(count + 1) : 0)
  let reset = () => (count === 5 ? setCount(0) : '')

  return (
    <div>
      <div className={count === 5 ? s.disable : ""}>
        <div className={s.count}>{count} </div>

        <div className={s.buttonInc}>
          <button onClick={Inc} disabled={count === 5 ? true : false}>
            inc
          </button>
          <button onClick={reset} disabled={count === 0 ? true : false}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
