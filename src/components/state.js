import { Component } from "react";

class Subscribe extends Component {
    constructor(){
        super()

        this.state = {
          message : 'Welcome visitor'
        }
    //BINDING WITHIN THE CONSTRUCTOR
       // this.changeMessage = this.changeMessage.bind(this)
        }
    //BINDING BY THE USE OF ARROW FUNCTION
        changeMessage = ()=>{
            this.setState({
                message: 'Thank you for subscribing'
            })
        }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                             {/* bindind ways*/}
                <button onClick={this.changeMessage}>Subscribe</button>
                {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button> */}
                {/* <button onClick={()=>this.changeMessage()}>Subscribe</button> */}
            </div>
        )
    }
}
export default Subscribe;