import { Component } from "react";
import HOC from "./HOC";
class Count extends Component{

    render(){
        const {count , incrementCount} = this.props;
        return(
            <div>
                <button onClick={incrementCount}>Clicked 
                  {count} Times</button>
            </div>
        )
    }

}
export default HOC(Count)