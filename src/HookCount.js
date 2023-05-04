import React, {useState} from 'react'

function HookCounter(){
    const [count, newValue] = useState(0);
return(
    <div>
        <button onClick={()=>newValue(count + 1)}>Count {count}</button>
    </div>
)
}
export default HookCounter