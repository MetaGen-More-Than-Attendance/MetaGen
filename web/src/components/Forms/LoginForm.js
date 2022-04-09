import React from 'react'
import { Button, Form } from 'react-bootstrap'
import loginImg from "../../images/java.jpeg"
import logoImg from "../../images/logo512.png"

const LoginForm = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ backgroundColor: '#222831', display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse" }}>
                <img src={loginImg} alt="img" style={{ width: '70%', height: '100vh' }} />
                <Form style={{ padding: "1rem", width: "70%" }} >
                    <Form.Group className="mb-3" style={{ display: 'flex', justifyContent: "center" }}>
                        <img src={logoImg} alt="logo" style={{ width: '2rem', height: '2rem' }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: 'flex', justifyContent: "center" }}>
                        <Form.Label style={{ color: '#EEE' }}>Login into your account</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: '#EEE' }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ color: '#EEE' }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button type="submit" style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default LoginForm