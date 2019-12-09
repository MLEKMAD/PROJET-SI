import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

export class CIRHome extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>Request name</h1>
                    <p>description</p>
                    <p>
                        <button variant='primary'>
                            Details
                        </button>
                    </p>
                </Jumbotron>
            </div>
        )

        
    }
}
export default CIRHome;