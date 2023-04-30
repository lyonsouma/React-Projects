import { Component } from "react";
import './ClickedCounter.css'
class ClickedCounter extends Component{
    constructor(){
        super()
        this.state = {
            Counter : 0
        }
    }
    changeClick = () => {
        this.setState(prevState => {
            return{Counter : prevState.Counter + 1}
        })
    }
    render(){
        const {Counter} = this.state
        return(
            <div>
                 <button className="bg" onClick={this.changeClick}>Clicked {Counter} times</button>
            </div>
        )
    }
}
export default ClickedCounter