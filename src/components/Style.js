import React from "react";
import './MyStyle.css'
function Style(props){

let className = props.Primary ? 'primary' : ''
    return(
        <div>
            <h4 className={`${className} font-xl`}>Hello Boy</h4>
        </div>
    )
}
export default Style;