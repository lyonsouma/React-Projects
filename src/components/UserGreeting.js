import { Component } from "react";

class UserGreeting extends Component{

    constructor(){
        super()
        this.state = {
          IsLoggedIn : false
    }
}
    render(){
        if(this.state.IsLoggedIn){
            return(
                <div>
                    <h1>Welcome Home</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>You haven't logged in</h1>
                </div>
            )
        }
    }
}

export default UserGreeting;