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
        alert(`${this.props.value}`);
       
    }
    render(){
        return(
            <form className="bg">
                <div>
                    <h1>SIGN UP</h1>
                    <h4>UserName  </h4>
                    <input className="box" type="text"  onChange={this.UpdateUserInput}></input>
                    
                </div>

                <div>
                    <h4>Email </h4>
                    <input className="box"  type="text" onChange={this.UpdateUserInput}></input>
                </div>

                <div>
                    <h4>Contact</h4>
                    <input className="box"  type="number"  onChange={this.UpdateUserInput}></input>
                    
                </div>
                <br></br>
                <button className="click" type="button"  onClick={this.SendInfo}>Send</button>
            </form>
        )
    }
}
export default Form;