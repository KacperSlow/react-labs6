import React from 'react'
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
    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div>               
                <Employee employees={this.state.employees} />
            </div>          
        )
    }
}

export default Companies
