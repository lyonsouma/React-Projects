import React from "react";

const HOC = (OriginalComponent) => {
    class NewComponent extends React.Component{
        render(){
            return(
                <OriginalComponent name ='Lyons' />
            )
        }
    }
    return NewComponent
}
export default HOC