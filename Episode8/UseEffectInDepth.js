import { useState,useEffect } from "react";

const UseEffectInDepth = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("SetInterval Executed");
            setTime(new Date().toLocaleTimeString());
        },1000)

        // CleanUp => Like UnMount 
        return () =>{
            console.log("UseEffectInDepth Component Will Unmount and interval is cleared");
            clearInterval(intervalId);
        }
    },[]); 

    useEffect(()=>{
        console.log("Count Updated");

        return () => {
            console.log("CleanUp of Count");
        }
    },[count]);  

    return (
      <div>
        <h1>Current Time</h1>
        <p>{time}</p>
        <p>{`Count : ${count}`} <button onClick={() => setCount(count + 1)}>Increment</button></p>
      </div>
    );
}

export default UseEffectInDepth;