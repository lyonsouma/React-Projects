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
            <form className="whole">
                <div>
                    <label className="text">UserName</label>
                    <input type="" value={this.state.userName} onChange={this.UpdateUserInput}></input>
                </div>
                <div>
                    <select className="text" value={this.state.Topic} onChange={this.ChangeTopic}>
                        <option>React</option>
                        <option>Python</option>
                        <option>JavaScript</option>
                    </select>
                </div>
                <button className="text" type="button" onClick={this.SendInfo}>Send</button>
            </form>
        )
    }
}
export default Form;