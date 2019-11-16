import React from 'react'
class Employee extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            dele: false
        };        
    }

    handleDelete =(e,id) =>{
        this.setState({dele: true})
        fetch('http://localhost:3000/employees/'+id, {
            method: 'DELETE'
            })
            .then(response => {response.json()})
        this.setState({dele: false})
    }
    render(){
       return(
        <div>
            {
                this.props.employees.map(employee => {
                return (
                        <div key={employee.id}>
                            <div style={{border:'2px dotted Green', padding:'3px'}}>
                                <p>Id : {employee.id}</p>
                                <p>Name: {employee.name}</p>                
                                <p>Age: {employee.age}</p>                
                                <p>Company: {employee.company}</p>
                                <p>Email: {employee.email}</p>
                                <p>isActive: {employee.isActive.toString()}</p>           
                            </div>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
       )
        
        
    }
}
export default Employee