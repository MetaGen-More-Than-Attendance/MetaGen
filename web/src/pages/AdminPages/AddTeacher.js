import React from 'react'

import AddTeacherForm from '../../components/Forms/AddTeacherForm'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AddTeacher = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Teacher</h1>
                <hr style={{ color: '#222831', width: '97%' }} />

                <AddTeacherForm />

            </div>
        </div>
    )
}

export default AddTeacher