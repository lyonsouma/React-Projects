import React, {useState, useEffect} from 'react'
function UseEffectTwo(){
    const [count, outcome] = useState(0)
    const [name, setName]  =useState('')

    useEffect(()=>{
        document.title = `Dialed ${count} times`
    })
return(
    <div>
        <input type='' value={name} onChange={(event =>setName(event.target.value))} />
        <button onClick={()=>outcome(count + 1)}>Dialed {count} times</button>
    </div>
)
}
export default UseEffectTwo 