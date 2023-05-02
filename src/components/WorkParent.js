import React from "react"
const WorkParent = (OrginalComponent)=>{

    class Parent extends React.Component{
      
        constructor(){
            super()
            this.state = {
                Count : 0
            }
        }
        ChangeContent = ()=>{
            this.setState ({
                Count :this.state.Count + 1
            })
        }
        render(){

            return <OrginalComponent
                      Count = {this.state.Count}
                      ChangeContent = {this.ChangeContent}
                      {...this.props}
                     />
                    }  
    }
    return Parent
    
}
export default WorkParent