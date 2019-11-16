import React from 'react'
function Employee(props){
    return(
        <div>
            <div style={{border:'2px dotted Green', padding:'3px'}}>
                <p>Name: {props.data.name}</p>
                <p>Age: {props.data.age}</p>
                <p>Company: {props.data.company}</p>
                <p>Active: {props.data.isActive.toString()}</p>
                <p>email: {props.data.email}</p>          
            </div>
            <br />
        </div>        
    )
}
export default Employee