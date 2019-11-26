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
            save: false
        };        
    }
    fetchData()
    {
            this.setState({ isLoading: true })
            fetch('http://localhost:3000/employees')
            .then(response => response.json())
            .then(response => {
            this.setState({ employees: response, isLoading: false , save: false, delete: false, add: false })
            })     
    }
    handleAddEmployee = (e) =>{
        this.setState({ add: !this.state.add});
    }
    componentDidMount() {
        this.fetchData();
    }
    onSubmit = (e) => {
        
        this.setState({save: true})
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
        .then(() => {
            this.fetchData();
        });        
       
    }

    handleDeleteEmployee = (e,id) => {        
        fetch('http://localhost:3000/employees/'+id, {
        method: 'DELETE'
        })
        .then(response => {response.json()})
        .then(() => {
            this.fetchData();
        });
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
                    <Employee employees={this.state.employees} handleDeleteEmployee={this.handleDeleteEmployee}/>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.handleAddEmployee}>Add Employee</button>
                {this.state.employees.map(employee =>
                    <Employee key={employee.id} employee={employee} handleDeleteEmployee={this.handleDeleteEmployee}/>)}
            </div>          
        )
    }
}

export default Companies
