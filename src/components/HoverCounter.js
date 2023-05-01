import { Component } from "react";
import HOC from "./HOC";
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
                <button onMouseOver={this.changeHoverCounter}>{this.props.name} Hovered {hover} Times</button>
            </div>
        )
    }

}
export default HOC(Hover)