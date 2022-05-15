import React from 'react'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AdminDisplayDepartment = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Display All Departments</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
            </div>
        </div>
    )
}

export default AdminDisplayDepartment