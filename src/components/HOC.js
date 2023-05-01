import React from "react";

const HOC = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state ={
               count : 0
            }
        }
        changeHoverCounter = ()=>{
         this.setState({
           count:this.state.hover +1
         })
        }
        render(){
            return(
                <OriginalComponent
                 count = {this.state.count} 
                 incrementCount ={this.incrementCount}/>
            )
        }
    }
    return NewComponent
}
export default HOC