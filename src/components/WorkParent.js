import React from "react"
const WorkParent = (OrginalComponent , incrementNumber)=>{

    class Parent extends React.Component{
      
        constructor(){
            super()
            this.state = {
                Count : 0
            }
        }
        ChangeContent = ()=>{
            this.setState (prevstate =>{
               return  {Count :this.state.Count + incrementNumber}
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