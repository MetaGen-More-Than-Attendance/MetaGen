import React, { useState } from 'react'
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

  const specificDayAttendance = useSelector((state) => state.attendances.entities);

  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(fetchAbsenteeismLectureIdAndDate(data));
    setShow(true);
  }

  const handleRow = () => {
    return (
      specificDayAttendance?.body?.map((row) => {
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
                {specificDayAttendance?.head?.map(head => <th>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {handleRow()}
            </tbody>
          </Table>
        }
      </div>
    </div>
  )
}

export default LecDetAttendance