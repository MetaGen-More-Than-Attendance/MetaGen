import React from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import AdminSideMenu from '../components/AdminSideMenu'

const AddSemester = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Semester Informations</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Form>
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

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <Form.Label>Finish Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                    <Button type="submit" style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                        Submit
                    </Button>
                </Form>
            </div >
        </div >
    )
}

export default AddSemester