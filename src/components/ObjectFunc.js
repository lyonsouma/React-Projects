import React from 'react'
function NameLists(){
    const names = ['Jerry', 'Kelly', 'Joe', 'lyons', 'brian', ' calab']
    return(
        <div>
            {
               names.map(names => <h1>{names}</h1>)
            }
        </div>
    )
}
export default NameLists;