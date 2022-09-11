import React from 'react';
import {Button,Form} from 'react-bootstrap';

import './RegisterScreen.css';

const RegisterScreen= ()=>{


    return(
        <div class="full-screen-container">
            <div class="login-container">
                <h1 class="login-title">Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" style={{}}>
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export default RegisterScreen;