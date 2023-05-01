import { Component } from "react";
import HOC from "./HOC";

class Count extends Component{
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    changeValue = ()=>{
     this.setState({
        count:this.state.count +1
     })
    }

    render(){
        return(
            <div>
                <button onClick={this.changeValue}>{this.props.name} Clicked {this.state.count} Times</button>
            </div>
        )
    }

}
export default HOC (Count)