import React from 'react'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu';
import AddSemesterForm from '../../components/Forms/AddSemesterForm';

const AddSemester = () => {


    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Semester Informations</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                
                <AddSemesterForm />

            </div >
        </div >
    )
}

export default AddSemester

