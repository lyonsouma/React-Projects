import { Component } from "react";
import ParentHoc from "./HOCCounterHover";

class CounterApp extends Component{
    render(){
        const {Count, ChangeValue} = this.props
        return(
            <div>
             <button onClick={ChangeValue}>Clicked {Count} times</button>
            </div>
        )
    }
}
export default ParentHoc(CounterApp)