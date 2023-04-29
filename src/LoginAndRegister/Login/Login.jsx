import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    function formHandler(e) {

        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;

        console.log(Email, Password)

        e.target.reset()
    }

    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center my-5 fw-bold'>Login your account</h2>
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email address" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='w-100' variant="dark" type="submit">
                        Login
                    </Button>
                    <Form.Group className="my-4 text-center" controlId="formBasicCheckbox">
                        <span className='fw-bold'> Dont’t Have An Account ?</span> <Link to='/register' className='fw-bold text-danger text-decoration-none'>Register</Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Login;