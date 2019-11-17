import React from 'react'
class Employee extends React.Component {
    constructor(props) {
        super(props);     
    }

    render(){
       return(
            <div>
                {
                    this.props.employees.map((employee) => {
                    return (
                            <div key={employee.id}>
                                <div style={{border:'2px dotted Green', padding:'3px'}}>
                                    <p>Id : {employee.id}</p>
                                    <p>Name: {employee.name}</p>                
                                    <p>Age: {employee.age}</p>                
                                    <p>Company: {employee.company}</p>
                                    <p>Email: {employee.email}</p>
                                    <p>Active: {employee.isActive.toString()}</p>   
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
