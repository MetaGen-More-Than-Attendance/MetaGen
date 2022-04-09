import React, { useState } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'
import AdminSideMenu from '../../components/AdminSideMenu'

const AdminDisplayLectures = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <AdminSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>Display All Lectures</h1>
        <hr style={{ color: '#222831', width: '97%' }} />
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th></th>
              <th>Lecture</th>
              <th>Teacher</th>
              <th>Semester</th>
              <th>Lecture Code</th>
              <th>Start Date</th>
              <th>Start Hour</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Calculus 1</td>
              <td>Teoman Bayoglu</td>
              <td>Fall</td>
              <td>BIM 344</td>
              <td>01/01/2022</td>
              <td>09:00</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleShow}>Edit</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Calculus 2</td>
              <td>Teoman Bayoglu</td>
              <td>Spring</td>
              <td>BIM 344</td>
              <td>01/01/2022</td>
              <td>09:00</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Edit</Button></td>
            </tr>
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Lecture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Lecture Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Calculus 1"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Teoman Bayoglu"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Fall"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Lecture Code</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="BIM 344"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Start Hour</Form.Label>
                <Form.Control
                  type="time"
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

export default AdminDisplayLectures