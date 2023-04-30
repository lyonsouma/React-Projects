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
    return(
        <div>

        </div>
    )
}
}
export default ErrorBoundry