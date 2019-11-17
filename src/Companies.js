import React from 'react'
import Employee from './Employee'
import AddEmployee from './AddEmployee'
class Companies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isLoading: false,
            add: false
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


    render() {
        if (this.state.isLoading){
            return <p>Loading ...</p>;
        }
        if(this.state.add){
            return(
                <div>
                    <button onClick={this.handleAddEmployee}>Add Employee</button>
                    <AddEmployee handleAddEmployee={this.handleAddEmployee}/>
                    <Employee employees={this.state.employees} add={this.state.add}/>
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.handleAddEmployee}>Add Employee</button>             
                <Employee employees={this.state.employees} />
            </div>          
        )
    }
}

export default Companies
