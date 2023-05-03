import { Component } from "react";
import './Form.css'
class Form extends Component{

    constructor(){
        super();

        this.state = {
            userName : ' ',
        }
    }
    UpdateUserInput = (props)=> {
      this.setState({
        userName : this.props.value
      })
    }

    SendInfo = ()=>{
        alert(`${this.props.value} ${this.state.Topic}`);
       
    }
    render(){
        return(
            <form className="whole, round">
                <div>
                    <h1>SIGN UP</h1>
                    <h4>UserName  </h4>
                    <input className="box" type="text"  onChange={this.UpdateUserInput}></input>
                    
                </div>

                <div>
                    <h4>Email </h4>
                    <input className="box"  type="text" value={this.props.value} onChange={this.UpdateUserInput}></input>
                </div>

                <div>
                    <h4>Contact</h4>
                    <input className="box"  type="number"  onChange={this.UpdateUserInput}></input>
                    
                </div>
                
                <button type="button"  onClick={this.SendInfo}>Send</button>
            </form>
        )
    }
}
export default Form;