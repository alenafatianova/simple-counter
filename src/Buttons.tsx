import React, {useState} from 'react'
import s from './counter.module.scss'

export default function Buttons() {

    let  [count, setCount] = useState(0);

    let Inc = () => {
        if (count < 5 ) {
            setCount(count+1);
        }
    }
    
    let reset = () => {
        if (count === 5) {
            setCount(0);
        } 
    }

    return (
        <div>
            <div className={count === 5 ? s.disable : s.norm}> 
            {count} 
        <div>
            <button 
                onClick={Inc} 
                className={count === 5 ? s.opacity : s.normOpacity} >inc</button>    
            <button  
                onClick={reset} 
                className={count === 0 ? s.opacity : s.normOpacity  }>reset</button>
        </div>
        </div> 
        </div> 
    )      
}
