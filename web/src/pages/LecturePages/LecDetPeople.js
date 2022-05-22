import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Image, Table } from 'react-bootstrap'

import SideMenu from '../../components/SideMenus/SideMenu'
import { fetchLectureStudents } from '../../redux/features/lecture/lectureSlice';

const LecDetPeople = () => {
  const lectureId = localStorage.getItem("lectureId");

  const dispatch = useDispatch();

  const lectureStudents = useSelector((state) => state.lectures.entities);

  useEffect(() => {
    dispatch(fetchLectureStudents(lectureId));
  }, [dispatch, lectureId]);


  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>{localStorage.getItem("lectureName")}'s Students</h1>
        <hr style={{ color: '#222831', width: '100%' }} />
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th></th>
              <th style={{display: 'flex', justifyContent: 'center'}}>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th style={{display: 'flex', justifyContent: 'center'}}>Email</th>
            </tr>
          </thead>
          <tbody>
            {lectureStudents.map((student) => {
              return (
                <tr>
                  <td>{student.studentId}</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}><Image src={`data:image/jpeg;base64,${student.photo}`} alt="?" rounded={true} style={{ width: '2rem' }} /></td>
                  <td>{student.userName}</td>
                  <td>{student.userSurname}</td>
                  <td>{student.departmentName}</td>
                  <td style={{display: 'flex', justifyContent: 'center'}}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={() => window.location = `mailto:${student.userMail}`}>Contact</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default LecDetPeople