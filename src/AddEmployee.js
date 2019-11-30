import React from 'react'
import{
    BrowserRouter as Router,
    Link
} from "react-router-dom" 
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){  
        
    return(
        <div>
            <div style={{border:'2px solid black', padding:'3px'}}>
                {this.props.save ? <p>Saving ...</p>
                :
                <form onSubmit={(e) => this.props.onSubmit(e)} >
                    <p>ID: <input disabled></input></p>
                    <p>Name: <input name="name"></input></p>
                    <p>Age: <input type="number" name="age"></input></p>
                    <p>Company: <input name="company"></input></p>
                    <p>email: <input type="email" name="email"></input></p>
                    <p>Active: <input type="checkbox" name="active"></input></p>                     
                    <Link to="/">              
                    <button type="button" >Cancel</button>
                    </Link> 
                    <button >Add</button>
                </form>

                }
            </div>
            <br />
        </div>
    )
    }
}
export default AddEmployee
