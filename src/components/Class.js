import { Component } from "react";

class Lyons extends Component{
    render(){
        return(
            <div>
                <h1>It's easy to write react code {this.props.name}</h1>
            </div>
        )
    }
}
export default Lyons;