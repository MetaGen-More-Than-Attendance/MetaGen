import React from 'react'
import SideMenu from '../../components/SideMenu';

const LectureDetails = () => {

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <SideMenu />
            <div style={{ marginLeft: 15, width: '100%' }}>
                <h1 style={{ color: '#9C9FA3' }}>Lecture Name</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <h2 style={{ fontSize: 25 }}>Welcome Mr./Mrs. XXXXXX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr style={{ color: '#222831', width: '97%' }} />
                <h1 style={{ color: '#9C9FA3', fontSize: 25 }}>Generated Qr Codes</h1>
                <ul>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                    <li>DD/MM/YYYY HH:MM:SS</li>
                </ul>
            </div>
        </div>
    )
}

export default LectureDetails