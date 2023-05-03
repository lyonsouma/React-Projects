import { Component } from "react";
import './Form.css'
class Form extends Component{

    constructor(){
        super();

        this.state = {
            userName : '',
            Topic : 'React'
        }
    }
    UpdateUserInput = (event)=> {
      this.setState({
        userName : event.target.value
      })
    }

    ChangeTopic = (event)=>{
        this.setState({
            Topic : event.target.value
        })
    }
    SendInfo = (event)=>{
        alert(`${this.state.userName} ${this.state.Topic}`);
        event.preventDefault()
    }
    render(){
        return(
            <form className="whole, round">
                <div>
                    <h1>SIGN UP</h1>
                    <h4>UserName :
                    <input className="box" type="" value={this.state.userName} onChange={this.UpdateUserInput}></input>
                    </h4>
                    
                </div>

                <div>
                    <h4>Email : 
                    <input type="" value={this.state.userName} onChange={this.UpdateUserInput}></input>
                    </h4>
                    
                </div>

                <div>
                    <h4>Contact
                    <input type="" value={this.state.userName} onChange={this.UpdateUserInput}></input>
                    </h4>
                    
                </div>
                
                <button type="button" onClick={this.SendInfo}>Send</button>
            </form>
        )
    }
}
export default Form;