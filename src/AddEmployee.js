import React from 'react'
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){  
        if(this.props.save){
            return(
                <div style={{border:'2px solid black', padding:'3px'}}>
                    <p>Saving ...</p>
                </div>
            )
        }      
    return(
        <div>
            <div style={{border:'2px solid black', padding:'3px'}}>
                <form onSubmit={(e) => this.props.onSubmit(e)} >
                    <p>ID: <input disabled></input></p>
                    <p>Name: <input name="name"></input></p>
                    <p>Age: <input type="number" name="age"></input></p>
                    <p>Company: <input name="company"></input></p>
                    <p>email: <input type="email" name="email"></input></p>
                    <p>Active: <input type="checkbox" name="active"></input></p>                
                    <button type="button" onClick={(e) => this.props.handleAddEmployee(e)} >Cancel</button>
                    <button>Add</button>
                </form>            
                <br />
            </div>
            <br />
        </div>
    )
    }
}
export default AddEmployee
