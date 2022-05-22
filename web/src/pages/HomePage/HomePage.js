import React from 'react'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import background from '../../images/homeBg2.jpg';

const HomePage = ({ isAdmin }) => {
    return (
        <div style={{ height: "88.6vh", display: "flex" }}>
            {isAdmin === true ?
                <AdminSideMenu />
                :
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%'
                }}>
                    <h1 style={{ color: "#00ADB5",   }}>WELCOME TO METAGEN</h1>
                    <p style={{ color: "#00ADB5",   }}>More than attendance</p>
                </div>

            }
        </div>
    )
}

export default HomePage