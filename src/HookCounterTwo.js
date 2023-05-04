import React, {useState} from "react";

function HookCounterTwo (){
    const initialValue = 0
    const [count , finalValue] = useState(initialValue);
return(
    <div>

        count : {count}
        <br/>
        <button onClick={()=>finalValue(count + 1)}>Increment</button>
        <button onClick={()=>finalValue(initialValue)}>Reset</button>
        <button onClick={()=>finalValue(count - 1)}>Decrement</button>
    </div>
)
}
export default HookCounterTwo