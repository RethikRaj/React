import { useState } from "react";

const userCard = ({name,location,contact}) =>{
    const [count,setCount] = useState(0);;

    return (
        <div className="user-card"> 
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : {contact}</h3>
            <div className="count-container">
                <h3>Count : {count}</h3>
                <button onClick={()=>{setCount(count+1)}}>Increment</button>
            </div>
            
        </div>
    )
}

export default userCard;