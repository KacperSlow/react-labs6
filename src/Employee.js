import React from 'react'
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delete : false
        }  
    }
    render(){
        if(this.state.delete){
            return (
                <div >
                    <div style={{border:'2px dotted Green', padding:'3px'}}>
                        <p>Deleting ...</p>      
                    </div>
                    <br/>
                </div>
            )
        }
       return(
            <div>
                <div style={{border:'2px dotted Green', padding:'3px'}}>
                    <p>Id : {this.props.employee.id}</p>
                    <p>Name: {this.props.employee.name}</p>                
                    <p>Age: {this.props.employee.age}</p>                
                    <p>Company: {this.props.employee.company}</p>
                    <p>Email: {this.props.employee.email}</p>
                    <p>Active: {this.props.employee.isActive.toString()}</p>
                    <button onClick={(e) => {this.props.handleDeleteEmployee(e,this.props.employee.id); this.setState({delete:true})}}>Delete</button>      
                </div>
                <br/>
            </div>
       )        
    }
}
export default Employee
