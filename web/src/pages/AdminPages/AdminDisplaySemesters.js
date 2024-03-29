import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'

import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AdminDisplaySemesters = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/semester/getAll');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);


  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <AdminSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>Display All Semesters</h1>
        <hr style={{ color: '#222831', width: '97%' }} />
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>Semester</th>
              <th>Start Date</th>
              <th>Finish Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((semester) => {
              return (
                <tr>
                  <td>{semester.semesterName}</td>
                  <td>{semester.startDate}</td>
                  <td>{semester.endDate}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", width: '40%' }} onClick={handleShow} >Edit</Button>
                    <Button style={{ backgroundColor: "red", borderColor: "red", width: '40%' }} onClick={handleShow} >Delete</Button>
                    </td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Semester</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Fall"
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
                <Form.Label>Finish Date Date</Form.Label>
                <Form.Control
                  type="date"
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

export default AdminDisplaySemesters