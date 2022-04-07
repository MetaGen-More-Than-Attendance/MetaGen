import React, { useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'

const AddUser = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        setIsFilePicked(true);
    };

    return (
        <div>
            <div style={{ display: 'flex', float: 'left ', width: '30%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
                <Form.Group controlId="formFile" className="mr-5" style={{ width: '70%' }}>
                    <Form.Control type="file" onChange={changeHandler} />
                </Form.Group>
                {isFilePicked && <Image src={selectedFile} roundedCircle={true} className="mt-5 mr-5" style={{ width: '70%' }} />}
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
    )
}

export default AddUser