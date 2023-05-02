import { Component } from "react";
import WorkParent from "./WorkParent";
class WorkHover extends Component{
    constructor(){
        super()
        this.state = {
            Count : 0
        }
    }
render(){
const {Count , ChangeContent} = this.props
    return(
        <div>
           <button onMouseOver={ChangeContent}>{this.props.name}     Hovered {Count} times</button>
        </div>
    )
}
}
export default WorkParent(WorkHover)