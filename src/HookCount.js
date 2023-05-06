import React, {useState, useEffect} from 'react'

function HookCounter1(){
    const [count, newValue] = useState(0);
    const [name ,title] = useState ('')
    useEffect(()=>{
        document.title = `you have clicked ${name} times`
    })
return(
    <div>
        <button onClick={()=>newValue(count + 1)}>Count {count}</button>
        <button onClick={()=>title(<div>
           { document.title = `you have clicked ${name} times`}
        </div>)}>Count {count}</button>
    </div>
)
}
export default HookCounter1