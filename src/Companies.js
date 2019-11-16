import React from 'react'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'
class Companies extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
            add: false,
            save: false,
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
          isActive: e.target.active.value == "on" ? true : false,
          age: e.target.age.value,
          name: e.target.name.value,
          company: e.target.company.value,
          email: e.target.email.value
        }
        newEmployee.id =(Math.floor(Math.random() * (100000000)) + 1).toString();           
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

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if(this.state.add || this.state.save) {
            return(
                <div>
                    <button onClick={this.handleAddEmployee}>Add Employee</button>
                    <AddEmployee handleAddEmployee={this.handleAddEmployee} onSubmit={this.onSubmit} save={this.state.save}/>
                    <EmployeeList employee={this.state.employees}/>
                </div>
            )
        }
		return (
            <div>
                <button onClick={this.handleAddEmployee}>Add Employee</button>
                <EmployeeList employee={this.state.employees}/>
            </div>			
		)
	}
}

export default Companies