import { Component } from "react";
import WorkParent from "./WorkParent";

class WorkCount extends Component{
  
render(){
const {Count, ChangeContent} = this.props
    return(
        <div>
           <button onClick={ChangeContent}>{this.props.name} Clicked {Count} times</button>
           <h1>Hello</h1>
        </div>
    )
}
}
export default WorkParent(WorkCount)