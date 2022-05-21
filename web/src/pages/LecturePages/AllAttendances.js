import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Table, Button } from 'react-bootstrap'
import axios from 'axios'

import SideMenu from '../../components/SideMenus/SideMenu'
import { fetchAllAbsenteeism } from '../../redux/features/attendance/attendanceSlice';

const AllAttendances = () => {
    const [show, setShow] = useState(false);
    const [semester, setSemester] = useState([]);
    const [data, setData] = useState({
        semesterId: "",
        lectureId: localStorage.getItem("lectureId"),
    });
    const allAttendances = useSelector((state) => state.attendances.entities);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/semester/getAll');
                setSemester(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [])


    const dispatch = useDispatch()

    const handleSend = () => {
        dispatch(fetchAllAbsenteeism(data));
        setShow(true);
    }

    const handleRow = () => {
        return (
            allAttendances?.body?.map((row) => {
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
                <Form.Label>Choose Semester</Form.Label>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>
                    <Form.Group style={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                        <Form.Select
                            name="semesterName"
                            style={{ color: 'gray', width: '67%' }}
                            onChange={(e) => setData({
                                ...data,
                                semesterId: e.target.value
                            })}
                        >
                            <option value="" >Choose one semester</option>
                            {semester.map((sem) => <option value={sem.semesterId} style={{ color: 'black' }} key={sem.semesterId}>{sem.semesterName}</option>)}
                        </Form.Select>
                        <Button onClick={handleSend}>Send</Button>
                    </Form.Group>

                </div>

                {show &&
                    <Table striped bordered hover responsive="md">
                        <thead>
                            <tr>
                                {allAttendances?.head?.map(head => <th>{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {handleRow()}
                        </tbody>
                    </Table>}
            </div>
        </div>
    )
}

export default AllAttendances