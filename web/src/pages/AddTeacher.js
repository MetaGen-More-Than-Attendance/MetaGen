import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import AdminSideMenu from '../components/AdminSideMenu'

const AddTeacher = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        setIsFilePicked(true);
    };


    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Teacher</h1>
                <hr style={{ color: '#222831', width: '97%' }} />

                <div style={{ display: 'flex', float: 'left ', width: '30%', flexDirection: 'column', justifyContent: 'space-between' }} >
                    <input type="file" name="file" onChange={changeHandler} style={{ marginBottom: '5rem' }} />
                    {isFilePicked && <img src={selectedFile} alt="selectedImg" style={{ width: '5rem' }} />}
                </div>

                <Form style={{ width: '70%', float: "right" }}>
                    <Form.Group className="mb-1" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher name" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher surname" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Identity Number</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher identity number" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="input" placeholder="Enter teacher department" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail" style={{ width: '60%' }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword" style={{ width: '60%' }}>
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