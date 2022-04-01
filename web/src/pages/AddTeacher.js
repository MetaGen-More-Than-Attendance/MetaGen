import React from 'react'
import { Button, Form } from 'react-bootstrap'
import AdminSideMenu from '../components/AdminSideMenu'

const AddTeacher = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Teacher</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <div>
                    <h1 style={{ width: '50%', float: "left" }}>...</h1>
                </div>
                <Form style={{ width: '50%', float: "right" }}>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher name" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher surname" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Identity Number</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher identity number" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher department" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
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

export default AddTeacher