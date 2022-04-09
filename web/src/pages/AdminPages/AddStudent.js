import React from 'react'
import AddUser from '../../components/AddUser'
import AdminSideMenu from '../../components/AdminSideMenu'

const AddStudent = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Student</h1>
                <hr style={{ color: '#222831', width: '97%' }} />

                <AddUser />

            </div>
        </div>
    )
}

export default AddStudent