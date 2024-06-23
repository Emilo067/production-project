import React, {useState} from 'react';
import s from "./Counter.module.scss"
export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
          <span>{count}</span>
            <button className={s.btn} onClick={increment}>Increment</button>
        </div>
    );
};