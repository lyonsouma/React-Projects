import React, {useState} from 'react';

function Name(){

    const [firstName, newName] = useState(" ")

    return(
        <form>

        <input value={firstName} onChange={(e)=>newName(e.target.value)}></input>
        </form>
    )
}
export default Name