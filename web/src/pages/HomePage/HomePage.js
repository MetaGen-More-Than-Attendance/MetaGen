import React from 'react'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'

const HomePage = ({ isAdmin }) => {
    return (
        <div style={{ height: "80vh", display: "flex" }}>
            {isAdmin ? <AdminSideMenu /> :
                <div>
                        <h1>WELCOME TO HOME PAGE</h1>
                </div>
            }
        </div>
    )
}

export default HomePage