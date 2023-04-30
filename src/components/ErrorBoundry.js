import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(){
        super()
        this.state = {
            haserror : false
        }
    }
    static getDerivedStateFromError(error){
        return{
            haserror : true
        }
    }
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
render(){
    if(this.state.haserror){
     return  <div>There is an error somewhere</div>
    }
    return this.props.children
}
}
export default ErrorBoundry