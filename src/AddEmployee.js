import React from 'react'
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){   
    return(
        <div>
            <div style={{border:'2px solid black', padding:'3px'}}>
                <form >
                    <p>ID: <input disabled></input></p>
                    <p>Name: <input name="name"></input></p>
                    <p>Age: <input type="number" name="age"></input></p>
                    <p>Company: <input name="company"></input></p>
                    <p>email: <input type="email" name="email"></input></p>
                    <p>Active: <input type="checkbox" name="active"></input></p>                
                    <button type="button" onClick={(e) => this.props.handleAddEmployee(e)}>Cancel</button>
                    <button type="button" onClick={(e) => this.props.handleAddEmployee(e)}>Add</button>
                </form>            
                <br />
            </div>
            <br />
        </div>
    )
    }
}
export default AddEmployee
