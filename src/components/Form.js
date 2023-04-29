import { Component } from "react";

class Form extends Component{

    constructor(){
        super();

        this.state = {
            userName : ''
        }
    }
    render(){
        return(
            <form>
                <div>
                    <label>UserName</label>
                    <input type="" value={this.state.userName}></input>
                </div>
            </form>
        )
    }
}
export default Form;