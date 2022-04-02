import React from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import AdminSideMenu from '../components/AdminSideMenu'

const AddLecture = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Lecture</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Lecture Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter lecture name" />
                    </Form.Group>

                    <div style={{ display: 'flex', width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control type="input" placeholder="Search teacher name" style={{ width: '60%' }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <Form.Label>Semester</Form.Label>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="Choose Semester"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">Fall</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Spring</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Lecture Code</Form.Label>
                        <Form.Control type="input" placeholder="Enter lecture code" />
                    </Form.Group>

                    <div style={{ display: 'flex', width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <Form.Label>Start Hour</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </div>

                    <Button type="submit" style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                        Submit
                    </Button>
                </Form>
            </div >
        </div >
    )
}

export default AddLecture