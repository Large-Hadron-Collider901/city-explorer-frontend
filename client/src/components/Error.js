import React from 'react';
import { Alert } from 'reactstrap'
import { Button } from 'react-bootstrap'
import './App.css'

class Error extends React.Component {
    refresh = () => {
        window.location.reload();
    }
     
      


    render() {
        return ( 
    
            <div id="body-text">
               <Alert id="alert">
                    <h2 id="heading2">Woops... that didn't work,</h2>
                       
                    <p id="p">{this.props.errors}</p>
                    <Button id="error-button"  onClick={this.refresh} type="submit">Click to refresh the page</Button>
    
                 </Alert> 
                 </div>
         
        )
    
}
}
export default Error;