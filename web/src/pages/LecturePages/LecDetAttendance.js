import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Table } from 'react-bootstrap'

import SideMenu from '../../components/SideMenus/SideMenu'
import { fetchAbsenteeismLectureIdAndDate } from '../../redux/features/attendance/attendanceSlice';

const LecDetAttendance = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    localDate: "",
    lectureId: localStorage.getItem("lectureId"),
  });

  const attendanceByIdAndDate = useSelector((state) => state.attendances.entities);

  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(fetchAbsenteeismLectureIdAndDate(data));
    setShow(true);
  }

  console.log("🚀 ~ file: LecDetAttendance.js ~ line 10 ~ LecDetAttendance ~ data", data)
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', }}>
        <h1 style={{ color: '#9C9FA3' }}>Lecture Name</h1>
        <Form.Label>Choose Specific Date</Form.Label>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>
          <Form.Group style={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
            <Form.Control
              style={{ width: '70%', marginRight: 5 }}
              value={data.localDate}
              onChange={(e) => setData({
                ...data,
                localDate: e.target.value,

              })}
              type="date"
              autoFocus
            />
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
          </Table>
        }
      </div>
    </div>
  )
}

export default LecDetAttendance