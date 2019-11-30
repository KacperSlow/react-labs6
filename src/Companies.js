import React from 'react'
import AddEmployee from './AddEmployee'
import Employee from './Employee'
class Companies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isLoading: false
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
    componentDidMount() {
        this.fetchData();
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
        return (
            <div>                
                {this.state.employees.map(employee =>
                    <Employee key={employee.id} employee={employee} handleDeleteEmployee={this.handleDeleteEmployee}/>)}
            </div>          
        )
    }
}

export default Companies
