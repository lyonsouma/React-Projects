import React from "react"
const ParentHoc = (OriginalComponent) =>{
    class Main extends React.Component {

        constructor(){
            super()
                this.state ={
                    Count : 0
            }
        }

        ChangeValue = (prevstate)=>{

            this.setState ({
                Count : this.state.Count + 1
            })
        }
        render(){
            return <OriginalComponent 
                   Count = {this.state.Count}
                   ChangeValue = {this.ChangeValue}
            />
        }
    }
    return Main

}
export default ParentHoc