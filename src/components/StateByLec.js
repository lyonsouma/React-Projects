import {Component} from "react";

class StateByLec extends Component{

    constructor(){
        super();
        this.state = {
            Counter : 0,
        }
    }
    ChangeCounter(){
        this.setState({
            Counter: this.state.Counter +1,
        })
    }

    ChangeCount(){
        this.setState({
            Counter: 0,
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to my react Application</h1>
              <h1>Counter Value: {this.state.Counter}</h1>
              <button onClick={()=>this.ChangeCounter()}>Increment</button>
              <br></br>
              <button onClick={()=>this.ChangeCount()}>Reset</button>
            </div>
        )
    }
}

export default StateByLec;