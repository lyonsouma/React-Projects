import { Component } from "react";

class Hover extends Component{
    constructor(){
        super()
        this.state ={
            hover : 0
        }
    }
    changeHoverCounter = ()=>{
     this.setState({
        hover:this.state.hover +1
     })
    }

    render(){
        const {hover} = this.state
        return(
            <div>
                <button onMouseOver={this.changeHoverCounter}>Hovered {hover} Times</button>
            </div>
        )
    }

}
export default Hover