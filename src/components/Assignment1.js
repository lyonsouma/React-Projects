import { Component } from "react";

class Assignment1 extends Component{
    constructor(){
        super()

        this.state ={
            Count : 0
        }
    }
    Display =()=>{
        this.setState ({
            Count : this.state.Count + 1
        })
    }
    render(){
        const {Count} = this.state
        return(
            <div>
                <button onClick={this.Display}>Clicked {Count} times</button>
                <h1>Hi</h1>
            </div>
        )
    }

}
export default Assignment1 