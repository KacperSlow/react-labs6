import React from 'react'
import AddEmployee from './AddEmployee'
import { 
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
class PageEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };       
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);  
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
        },
        body: JSON.stringify(newEmployee)
        }).then(()=>
        {
         
         this.props.history.push('/');
        
        });   
    }
    handleCancel() {
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <AddEmployee onSubmit={this.onSubmit} handleCancel={this.handleCancel}/>
            </div>
        )
    }
    
}
export default withRouter(PageEmployee)