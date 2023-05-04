import React, {useState, useEffect} from 'react'
function UseEffectTwo(){
    const [count, outcome] = useState(0)

    useEffect(()=>{
        document.title = `Dialed ${count} times`
    })
return(
    <div>
        <input type='' ></input>
        <button onClick={()=>outcome(count + 1)}>Dialed {count} times</button>
    </div>
)
}
export default UseEffectTwo