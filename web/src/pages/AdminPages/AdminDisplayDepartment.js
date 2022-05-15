import React from 'react'
import { Table } from 'react-bootstrap'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AdminDisplayDepartment = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Display All Departments</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td></td>
                            <td colSpan={2}>Computer</td>
                        </tr>                                              
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdminDisplayDepartment