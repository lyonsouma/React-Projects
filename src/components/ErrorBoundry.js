import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(){
        super()
        this.state = {
            haserror : false
        }
    }
    static getDerivedStateFromError(){
        return{
            haserror : true
        }
    }
render(){
    if(this.state.haserror){
     return  <div>There is an error</div>
    }
    return this.props.children
}
}
export default ErrorBoundry