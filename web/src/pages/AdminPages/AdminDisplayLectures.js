import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Table, Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'

import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import { deleteLecture } from '../../redux/features/lecture/lectureSlice';

const AdminDisplayLectures = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [lecture, setLecture] = useState([]);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/lecture/getAll');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  const navigate = useNavigate()

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteLecture(id))
  }

  const handleShow = () => {
    // const [teacherData] = data.filter((lecture) => lecture.lectureId === id)
    // setLecture(teacherData);
    // console.log(data);
    setShow(true)
  };

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
              <th>Department</th>
              <th>Start Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((lecture) => {
              return (
                <tr >
                  <td>{lecture.lectureId}</td>
                  <td>{lecture.lectureName}</td>
                  <td>{lecture.instructorName}</td>
                  <td>Semester...</td>
                  <td>{lecture.departmentName}</td>
                  <td>{lecture.lectureStartDate}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={() => handleShow()}>Edit</Button>
                    <Button style={{ backgroundColor: "red", borderColor: "red", width: '40%' }} onClick={() => {
                      Swal.fire({
                        title: 'Do you want to delete the lecture?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'Delete',
                        denyButtonText: `Cancel`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(lecture.lectureId)
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