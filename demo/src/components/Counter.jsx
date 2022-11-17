import React from "react"
import { useState } from "react"
import "./counter.css"

const Counter=()=>{

    const[counter, setCounter]=useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        setCounter(counter-1)
    }

    const reset=()=>{
        setCounter(0)
    }
    return (
      <div className="container">
        <h1>counter App</h1>
        <div className="number">
          <h2>{counter}</h2>
        </div>
        <button className="btn" onClick={increment}>
          increment
        </button>
        <button className="btn" onClick={decrement}>
          decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    );
}
export default Counter