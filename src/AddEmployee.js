import React from 'react'
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            save: false
        }
      }

      onSubmit =(e) =>{
        e.preventDefault();
        const newEmployee = {
          isActive: e.target.active.checked,
          age: e.target.age.value,
          name: e.target.name.value,
          company: e.target.company.value,
          email: e.target.email.value
        }         
        fetch('http://localhost:3000/employees', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newEmployee)
        })
        .then(response => {response.json()})       
            
        this.setState({save: true})        
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
