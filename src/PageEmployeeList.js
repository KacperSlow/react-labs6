import React from 'react'
import Companies from './Companies'

class PageEmployeeList extends React.Component {
    constructor(props) {
        super(props);      
    }
    render(){
        return(
            <div>
             <Companies/>
            </div>
        )
    }
    
}
export default PageEmployeeList