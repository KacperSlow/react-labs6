import React from 'react'
import AddEmployee from './AddEmployee'
class PageEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            save: false
        };       
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (e) => {
        this.setState=({save:true})
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
    }
    render(){
        return(
            <div>
                <AddEmployee onSubmit={this.onSubmit} save = {this.state.save}/>
            </div>
        )
    }
    
}
export default PageEmployee