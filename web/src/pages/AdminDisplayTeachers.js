import React, { useState } from 'react'
import { Table, Button, Modal, Form, Image } from 'react-bootstrap'
import AdminSideMenu from '../components/AdminSideMenu'
import avatar from '../images/logo512.png'

const AdminDisplayTeachers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <h1 style={{ color: '#9C9FA3' }}>Display All Teachers</h1>
        <hr style={{ color: '#222831', width: '97%' }} />
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Identity Number</th>
              <th>Department</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Image src={avatar} rounded={true} style={{ backgroundColor: 'black', width: '2rem' }} /></td>
              <td>Teoman</td>
              <td>Bayoglu</td>
              <td>11111111111</td>
              <td>Computer</td>
              <td>bayogluteoman@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleShow}>Edit</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td><Image src={avatar} rounded={true} style={{ backgroundColor: 'black', width: '2rem' }} /></td>
              <td>Teoman</td>
              <td>Bayoglu</td>
              <td>11111111111</td>
              <td>Computer</td>
              <td>bayogluteoman@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Edit</Button></td>
            </tr>
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Teacher</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={changeHandler} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Calculus 1"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Teoman Bayoglu"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Identity Number</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Fall"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="BIM 344"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default AdminDisplayTeachers