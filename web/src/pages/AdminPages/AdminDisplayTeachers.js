import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Image } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'

import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import { fetchTeachers, deleteTeacher } from '../../redux/features/teacher/teacherSlice';
import HelperModal from '../../components/Modals/HelperModal';

const AdminDisplayTeachers = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    instructorId: "",
    userName: "",
    userSurname: "",
    identityNumber: "",
    departmentId: "",
    userMail: "",
    imageBase64 : ""
  });

  const handleClose = () => setShow(false);

  const allTeachers = useSelector((state) => state.teachers.entities);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTeacher(id))
  }

  const handleShow = (id) => {
    const [teacherData] = allTeachers.filter((teacher) => teacher.instructorId === id)
    setData(teacherData);
    console.log(data);
    setShow(true)
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
              <th style={{display: 'flex', justifyContent: "center"}}>Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Identity Number</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allTeachers.map((teacher) => {
              return (
                <tr key={teacher.instructorId}>
                  <td style={{ display: 'flex', justifyContent: 'center' }}><Image src={`data:image/jpeg;base64,${teacher.photo}`} alt="?" rounded={true} style={{ width: '2rem' }} /></td>
                  <td>{teacher.userName}</td>
                  <td>{teacher.userSurname}</td>
                  <td>{teacher.identityNumber}</td>
                  <td>{teacher.userMail}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={() => handleShow(teacher.instructorId)}>Edit</Button>
                    <Button style={{ backgroundColor: "red", borderColor: "red", width: '40%' }} onClick={() => {
                      Swal.fire({
                        title: 'Do you want to delete the student?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'Delete',
                        denyButtonText: `Cancel`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleDelete(teacher.instructorId)
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

        <HelperModal show={show} handleClose={handleClose} data={data} />

      </div>
    </div>
  )
}

export default AdminDisplayTeachers
