import React, { useState } from "react";

const App=()=>{
    const [counter, setCounter] = useState(0)

    const handleClick=()=>{
        setCounter(counter+1)
    }
    return(
        <>
        <p>counter</p>
        <button onClick={handleClick}>increment</button>
        </>
    )
}
export default App