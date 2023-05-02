import { Component } from "react";
import { UserConsumer } from "./Contex";

class ComponentC extends Component{

    render(){
        return(
            <UserConsumer>
                {
                    username =>{
                       return <div> Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentC