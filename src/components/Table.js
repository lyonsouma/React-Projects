import React from 'react'
import Column from './Column';
import './Table.css'

function Table(){
    return(
         <table className='shade'>
            <tbody>
                <tr>
                    <Column />
                </tr>
            </tbody>
         </table>
    )
}
export default Table;