import React from 'react'
import AddStudentToLectureForm from '../../components/Forms/AddStudentToLectureForm'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const AddStudentToLecture = () => {
  return (
    <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Lecture's Student</h1>
                <hr style={{ color: '#222831', width: '97%' }} />

                <AddStudentToLectureForm />

            </div>
        </div>
  )
}

export default AddStudentToLecture