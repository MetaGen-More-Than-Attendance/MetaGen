import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Modal, Form, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';

import { fetchStudents, deleteStudent } from '../../redux/features/student/studentSlice'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AdminDisplayStudents = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const allStudents = useSelector((state) => state.students.entities);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const changeHandler = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setIsFilePicked(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id))
  }

  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <AdminSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>Display All Students</h1>
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
            {allStudents.map((student) => {
              return (
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td><Image src={student.photoPath} alt="?" rounded={true} style={{ width: '2rem' }} /></td>
                  <td>{student.userName}</td>
                  <td>{student.userSurname}</td>
                  <td>{student.identityNumber}</td>
                  <td>Computer</td>
                  <td>{student.userMail}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", width: '40%' }} onClick={handleShow} >Edit</Button>
                    <Button style={{ backgroundColor: "red", borderColor: "red", width: '40%' }} onClick={() => {
                      Swal.fire({
                        title: 'Do you want to delete the student?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'Delete',
                        denyButtonText: `Don't delete`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(student.studentId)
                          setTimeout(() => {
                            navigate(0)
                          }, 1500)
                          Swal.fire('Deleted!', '', 'success')
                        } else if (result.isDenied) {
                          Swal.fire('Canceled', '', 'info')
                        }
                      })
                    }} >Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
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
                  placeholder="Teoman"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Bayoglu"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Identity Number</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="11111111111"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Computer"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="bayogluteoman@gmail.com"
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

export default AdminDisplayStudents