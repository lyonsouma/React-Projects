import React from 'react'
function NameLists(){
    const names = ['Jerry', 'Kelly', 'Joe']
    return(
        <div>
            {
               names.map(names => <h1>{names}</h1>)
            }
        </div>
    )
}
export default NameLists;