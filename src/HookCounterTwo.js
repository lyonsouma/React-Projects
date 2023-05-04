import React, {useState} from "react";

function HookCounterTwo (){
    const initialValue = 0
    const [count , finalValue] = useState(initialValue);
    const IncrementFive = () => {
        for(let i =0 ;i <5 ;i++){
            finalValue (prevCount => prevCount +1)
        }
    }
return(
    <div>

        count : {count}
        <br/>
        <button onClick={()=>finalValue (prevCount => prevCount +1)}>Increment</button>
        <button onClick={()=>finalValue(initialValue)}>Reset</button>
        <button onClick={()=>finalValue (prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={()=>finalValue (prevCount => prevCount + 5)}>Increment5</button>
    </div>
)
}
export default HookCounterTwo