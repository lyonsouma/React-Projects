import React, {useState ,useEffect} from "react"
function UseEffect(){
    const [count, newCount] = useState(0)
    const [jina, setJina] = useState(' ')

    useEffect(()=>{
        document.title = `you have clicked ${count} times`
    })
return(
    <div>
        <input type="" value={jina} onChange={(e => setJina(e.target.value))}/>
        <button onClick={()=>newCount(count + 1)}>cliced {count} times</button>
    </div>
)
}
export default UseEffect