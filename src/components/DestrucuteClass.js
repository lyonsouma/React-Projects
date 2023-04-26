import { Component } from "react";

class Destru extends Component{
    render(){
        const {name} = this.props;
        return(
            <div>
                <h1>Welcome {name}</h1>
            </div>
        )
    }
}

export default Destru;