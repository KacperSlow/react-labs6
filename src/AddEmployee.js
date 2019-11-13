import React from 'react'
class AddEmployee extends React.Component {
    
    render(){
    return(
        <div>
            <form onSubmit={this.onSubmit} style={{border:'2px solid black', padding:'3px'}}>
                <p>ID: <input disabled></input></p>
                <p>Name: <input ref="name"></input></p>
                <p>Age: <input type="number" ref="age"></input></p>
                <p>Company: <input ref="comapny"></input></p>
                <p >email: <input type="email" ref="email"></input></p>
                <p>Active: <input type="checkbox" ref="active"></input></p>                
                <button type="button" onClick={(e) => this.props.handleAddEmployee(e)} >Cancel</button>
                <button type="button" onClick={(e) => this.props.handleAddEmployee(e)} >Add</button>
            </form>            
            <br />
        </div>
    )
    }
}
export default AddEmployee