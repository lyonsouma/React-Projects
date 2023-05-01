import { Component } from "react";
import ParentHoc from "./HOCCounterHover";

class HoverApp extends Component{
    render(){
        const {Count, ChangeValue} = this.props
        return(
            <div>
                <h1>Hello Sir</h1>
             <button onMouseOver={ChangeValue}>Hovered {Count} times</button>
            </div>
        )
    }
}
export default ParentHoc(HoverApp)