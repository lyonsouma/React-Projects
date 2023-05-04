import React, {useState} from "react"
function HookCounter2 (){
    const [count , newNumber] = useState(0);
    return(
        <div>
            <h3>HOOKS</h3>
            <button onClick={()=> newNumber(count + 5)}>Count {count}</button>
            <br/>
        </div>
    )

}
export default HookCounter2