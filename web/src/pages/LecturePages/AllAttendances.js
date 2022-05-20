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
     console.log("🚀 ~ file: AllAttendances.js ~ line 18 ~ AllAttendances ~ allAttendances", allAttendances)

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

    console.log(data)

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <SideMenu />
            <div style={{ marginLeft: 15, width: '100%', }}>
                <h1 style={{ color: '#9C9FA3' }}>Lecture Name</h1>
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
                                <th colspan="0"></th>
                                <th>Name-Surname</th>
                                <th>DD/MM/YYYY</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>YES</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>Yes</td>
                            </tr> <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>Yes</td>
                            </tr> <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </Table>}
            </div>
        </div>
    )
}

export default AllAttendances