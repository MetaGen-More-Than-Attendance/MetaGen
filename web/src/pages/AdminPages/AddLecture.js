import React from 'react'
import AddLectureForm from '../../components/Forms/AddLectureForm'

import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'


const AddLecture = () => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Lecture</h1>
                <hr style={{ color: '#222831', width: '97%' }} />

                <AddLectureForm />
                
            </div >
        </div >
    )
}

export default AddLecture

