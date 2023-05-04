import React, {useState ,useEffect} from "react"
function UseEffect(){
    const [count, newCount] = useState(0)

    useEffect(()=>{
        document.title = `you have clicked ${count} times`
    })
return(
    <div>
        <button onClick={()=>newCount(count + 1)}>cliced {count} times</button>
    </div>
)
}
export default UseEffect