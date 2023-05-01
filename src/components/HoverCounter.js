import { Component } from "react";
import HOC from "./HOC";
class Hover extends Component{


    render(){
        const {count , incrementCount} = this.props
        return(
            <div>
                <button onMouseOver={incrementCount}> Hovered {count} Times</button>
            </div>
        )
    }

}
export default HOC(Hover)