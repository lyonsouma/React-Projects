import {Component} from 'react';
import { Consumer } from './ContexXYZ';
class ComponentZ extends Component{

    render(){
      return(
        <Consumer>
            {
                (username)=>{
                    return(
                    <div>
                        Hello mr. {username}
                    </div>
                    )

                }
            }
        </Consumer>
      ) 
}
}
export default ComponentZ