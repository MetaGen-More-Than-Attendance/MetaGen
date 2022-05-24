import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import ProfileSideMenu from '../../components/SideMenus/ProfileSideMenu'
import { fetchLecturesOfStudent } from '../../redux/features/admin/lecturesOfStudentSlice';
import { fetchLecturesOfTeacher } from '../../redux/features/admin/lecturesOfTeacherSlice';

const MyLectures = () => {
    const id = localStorage.getItem("userId");
    const isTeacher = localStorage.getItem("isTeacher");
    const isStudent = localStorage.getItem("isStudent");

    const data = useSelector((state) => {
        if (state.lecturesOfTeacher.entities.length > 0) {
          return state.lecturesOfTeacher.entities;
        }
        if (state.lecturesOfStudent.entities.length > 0) {
          return state.lecturesOfStudent.entities;
        }
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if(isTeacher === "true"){
          dispatch(fetchLecturesOfTeacher(id));
        }
        if(isStudent === "true"){
          dispatch(fetchLecturesOfStudent(id));
        }
      }, [dispatch, id, isStudent, isTeacher]);

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <ProfileSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>My Lectures</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Lecture Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((lectures) => {
                            return (
                                <tr>
                                    <td>{lectures.lectureName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyLectures