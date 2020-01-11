import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    Button,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import UcFirst from "../../../App/components/UcFirst";


import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import './Logo.css';

class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        {/* <div className="card">
</div> */}
                        <div className="card">
                        <div className="Logo mb-4">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <br></br>
                            </div>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up</h3>
                                <form>
                            
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password"/>
                                </div>
s
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                    </div>
                                </div>
                                
                                <OverlayTrigger  overlay={<Tooltip>{'outline-success'}</Tooltip>}>
                                    <Button variant={'outline-success'}><UcFirst text={'success'} /></Button>
                             </OverlayTrigger>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                                <br></br>
                                </form>
                                </div>
                                        
{/* 
                                const buttonVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ]; */}
                             
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;