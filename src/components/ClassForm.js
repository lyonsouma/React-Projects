import {Component} from 'react'

class Forms extends Component{
    state = {
        firstName :" ",
        lastName : " "
    }

    handleChange = ((event)=>{
        this.setState({
            firstName : event.target.value,
        })
    })

    
    handleChangel = ((event)=>{
        this.setState({
            lastName : event.target.value
        })
    })

    saveChange = ((e)=>{
        e.preventDefault()
        console.log({
            fName : this.state.firstName,
            lName : this.state.lastName
        })
    })

    render(){
        return(
            <form onSubmit={this.saveChange}>
                <input value={this.state.firstName} onChange={this.handleChange}></input>
                <input value={this.state.lastName} onChange={this.handleChangel}></input>
                <p> {this.state.firstName}</p>
                <p> {this.state.lastName}</p>
                <button type='submit'>Send</button>
            </form>
        )
    }
}
export default Forms