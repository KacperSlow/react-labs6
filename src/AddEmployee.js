import React from 'react'
class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            save:false
        }
      }
    render(){  
        
    return(
        <div>
            <div style={{border:'2px solid black', padding:'3px'}}>
                {this.state.save ? <p>Saving ...</p>
                :
                <form onSubmit={(e) => {this.props.onSubmit(e);this.setState({save:true})}} >
                    <p>ID: <input disabled></input></p>
                    <p>Name: <input name="name"></input></p>
                    <p>Age: <input type="number" name="age"></input></p>
                    <p>Company: <input name="company"></input></p>
                    <p>email: <input type="email" name="email"></input></p>
                    <p>Active: <input type="checkbox" name="active"></input></p>    
                    <button type="button" onClick={this.props.handleCancel} >Cancel</button>
                    <button >Add</button>
                </form>

                }
            </div>
            <br />
        </div>
    )
    }
}
export default AddEmployee
