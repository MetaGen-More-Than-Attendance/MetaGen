import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap'

import SideMenu from '../../components/SideMenus/SideMenu'
import { fetchStudentAbsenteeism } from '../../redux/features/attendance/attendanceSlice';

const MyAttendance = () => {
    const [data, setData] = useState({
        studentId: localStorage.getItem("userId"),
        lectureId: localStorage.getItem("lectureId"),
    });
    const studentAttendance = useSelector((state) => state.attendances.entities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudentAbsenteeism(data));
    }, [data, dispatch])


    const handleRow = () => {
        return (
            studentAttendance?.body?.map((row) => {
                return (
                    <tr>
                        {row.map(val => {
                            if (val === true) {
                                return (
                                    <td>{'✅'}</td>
                                )
                            }
                            else if (val === false) {
                                return (
                                    <td>{'❌'}</td>
                                )
                            }
                            else {
                                return (
                                    <td>{val}</td>
                                )
                            }

                        }
                        )}
                    </tr>

                )
            })
        )
    }

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <SideMenu />
            <div style={{ marginLeft: 15, width: '100%', }}>
                <h1 style={{ color: '#9C9FA3' }}>{localStorage.getItem("lectureName")}</h1>
                <hr style={{ color: '#222831', width: '100%' }} />
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            {studentAttendance?.head?.map(head => <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {handleRow()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyAttendance