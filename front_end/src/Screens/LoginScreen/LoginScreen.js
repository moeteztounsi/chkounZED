import React from 'react';
import './LoginScreen.css';
import {Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const LoginScreen = ()=>{
    return (

        <div class="full-screen-container">
            <div class="login-container">
                <h1 class="login-title">Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" style={{}}>
                        Sign In
                    </Button>
                    <Link to ="/register" style={{marginLeft:'270px'}}>
                        Don't have an account?
                    </Link>
                </Form>
            </div>
        </div>
    )
}


export default LoginScreen;