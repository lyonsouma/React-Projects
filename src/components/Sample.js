// import { Component } from "react";


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

          //CLASS COMPONENTS
    /*     
    class Property extends Component{
      constructor(){
        super()
        this.state ={
            Word: 'Yooh'
        }


      }

      changeInformation(){
        this.setState = ({
            Word :"Welcome"
        })
    }
        render(){
            return(
                
                <div>
                    <h1>Sample from {this.state.Word} </h1>
                    <button onClick={()=>{this.changeInformation()}}>Click</button>
                </div>
            )
        }
    }
export default Property;
*/