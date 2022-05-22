import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Image } from 'react-bootstrap'

import ProfileSideMenu from '../../components/SideMenus/ProfileSideMenu'
import { fetchGivenStudentIdData } from '../../redux/features/student/studentSlice';
import { fetchGivenTeacherIdData } from '../../redux/features/teacher/teacherSlice';

const ProfilePage = () => {
  const id = localStorage.getItem("userId");
  const isTeacher = localStorage.getItem("isTeacher");
  const isStudent = localStorage.getItem("isStudent");

  const data = useSelector((state) => {
    if (state.students.entities?.identityNumber !== undefined) {
      return state.students.entities;
    }
    if (state.teachers.entities?.identityNumber !== undefined) {
      return state.teachers.entities;
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
   if(isTeacher === "true"){
    dispatch(fetchGivenTeacherIdData(id));
   }
   if(isStudent === "true"){
    dispatch(fetchGivenStudentIdData(id));
   }
  }, [dispatch, id, isStudent, isTeacher]);

  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <ProfileSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>My Account</h1>
        <hr style={{ color: '#222831', width: '97%' }} />

        <div style={{ display: 'flex', float: 'left ', width: '30%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
          <Image src={`data:image/jpeg;base64,${data?.photo}`} style={{ backgroundColor: 'black', width: '70%', marginTop: 30 }} alt="?" roundedCircle={true}  />
        </div>

        <div style={{ width: '70%', float: "right" }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data?.userName + " "}{data?.userSurname}</h1>
          <hr style={{ color: '#222831', width: '96%' }} /> 
          {!isTeacher && <p style={{ fontSize: '1.5rem' }}>Department</p>}
          <p style={{ fontSize: '1.1rem' }}>{data?.departmentName}</p>
          <p style={{ fontSize: '1.5rem' }}>Identity Number</p>
          <p style={{ fontSize: '1.1rem' }}>{data?.identityNumber}</p>
          <p style={{ fontSize: '1.5rem' }}>My Contact Info</p>
          <p style={{ fontSize: '1.1rem' }}>{data?.userMail}</p>
          <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Edit</Button>
        </div>

      </div>
    </div>

  )
}

export default ProfilePage