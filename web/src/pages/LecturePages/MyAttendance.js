import React from 'react'
import { Table } from 'react-bootstrap'

import SideMenu from '../../components/SideMenus/SideMenu'

const MyAttendance = () => {

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <SideMenu />
            <div style={{ marginLeft: 15, width: '100%', }}>
                <h1 style={{ color: '#9C9FA3' }}>Lecture Name</h1>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>

                </div>
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyAttendance