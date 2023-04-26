import { Component } from "react";
/*

      //FUNCTIONAL COMPONENTS
const Properties = props => {
    const{name} = props
    return(
        <div>
            <h1>This a sample component from {name}</h1>
        </div>
    )
}

export default Properties;
*/
          //CLASS COMPONENTS
       
    class Property extends Component{
      constructor(){
        super()
        this.state ={
            Word: 'Subscribe Here!'
        }


      }

      changeInformation(){
        this.setState({
            Word :"Thanks for Subscribing"
        })
    }
        render(){
            return(
                
                <div>
                    <h1>{this.state.Word}</h1>
                    <button onClick={()=>{this.changeInformation()}}>Click</button>
                </div>
            )
        }
    }
export default Property;
