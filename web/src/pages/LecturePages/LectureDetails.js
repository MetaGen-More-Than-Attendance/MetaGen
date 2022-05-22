import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SideMenu from '../../components/SideMenus/SideMenu';

import { fetchGivenStudentIdData } from '../../redux/features/student/studentSlice';
import { fetchGivenTeacherIdData } from '../../redux/features/teacher/teacherSlice';

const LectureDetails = () => {
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
        if (isTeacher === "true") {
            dispatch(fetchGivenTeacherIdData(id));
        }
        if (isStudent === "true") {
            dispatch(fetchGivenStudentIdData(id));
        }
    }, [dispatch, id, isStudent, isTeacher]);

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <SideMenu />
            <div style={{ marginLeft: 15, width: '100%' }}>
                <h1 style={{ color: '#9C9FA3' }}>{localStorage.getItem("lectureName")}</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <h2 style={{ fontSize: 25 }}>🎉 Welcome {data?.userName + " "} {data?.userSurname}! </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
                {isTeacher === "true" ?
                    <div>
                         <hr style={{ color: '#222831', width: '97%' }} />  
                        <h1 style={{ color: '#9C9FA3', fontSize: 25 }}>Generated Qr Codes</h1>
                        <ul>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                            <li>DD/MM/YYYY HH:MM:SS</li>
                        </ul>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default LectureDetails