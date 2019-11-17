import React from 'react'
import AddEmployee from './AddEmployee'
import Employee from './Employee'
class Companies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isLoading: false,
            add: false,
            save: false,
            delete: false
        };        
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(response => {
        this.setState({ employees: response, isLoading: false  })
        })
    }
    handleAddEmployee = (e) =>{
        this.setState({ add: !this.state.add});
    }

    onSubmit = (e) => {
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
            
        this.setState({save: true}),
        fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(response => {
            this.setState({ employees: response, isLoading: false, add:false, save: false })
        })
    }

    handleDeleteEmployee = (e,id) => {
        fetch('http://localhost:3000/employees/'+id, {
        method: 'DELETE'
        })
        .then(response => {response.json()})

        
        this.setState({delete: true})
        fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(response => {
            this.setState({ employees: response, isLoading: false, add:false, save: false, delete: false })
        })
        
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if(this.state.add || this.state.save) {
            return(
                <div>
                    <button onClick={this.handleAddEmployee}>Add Employee</button>
                    <AddEmployee handleAddEmployee={this.handleAddEmployee} onSubmit={this.onSubmit} save={this.state.save}/>
                    <Employee employees={this.state.employees} handleDeleteEmployee={this.handleDeleteEmployee} delete={this.delete}/>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.handleAddEmployee}>Add Employee</button>
                <Employee employees={this.state.employees} handleDeleteEmployee={this.handleDeleteEmployee} delete={this.state.delete}/>
            </div>          
        )
    }
}

export default Companies
