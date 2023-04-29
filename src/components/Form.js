import { Component } from "react";

class Form extends Component{

    constructor(){
        super();

        this.state = {
            userName : ''
        }
    }
    UpdateUserInput = (event)=> {
      this.setState({
        userName : event.target.value
      })
    }
    render(){
        return(
            <form>
                <div>
                    <label>UserName</label>
                    <input type="" value={this.state.userName} onChange={this.UpdateUserInput}></input>
                </div>
            </form>
        )
    }
}
export default Form;