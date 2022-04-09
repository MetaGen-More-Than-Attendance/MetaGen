import React from 'react'
import { Table } from 'react-bootstrap'
import SideMenu from '../../components/SideMenu'

const LecDetAttendance = () => {
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>Lecture Name</h1>
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
      </div>
    </div>
  )
}

export default LecDetAttendance