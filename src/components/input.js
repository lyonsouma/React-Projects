import React, {useState} from 'react';
import './inputStyle.css'
function Name(){

    const [firstName, newName] = useState(" ")

    const sendValue = (e)=>{
        e.preventDefault()
        console.log({
            FName : {firstName}
        })

    }
    return(
        <form onSubmit={sendValue}>
        <input className='field' value={firstName} onChange={(e)=>newName(e.target.value)}></input>
        <button className='out' type='submit'>Click Here</button>
        </form>
    )
}
export default Name