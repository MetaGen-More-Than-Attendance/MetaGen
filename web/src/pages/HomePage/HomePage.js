import React from 'react'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const HomePage = ({ isAdmin }) => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            {isAdmin === true ? <AdminSideMenu /> : null}
        </div>
    )
}

export default HomePage