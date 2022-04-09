import { Button, Image } from 'react-bootstrap'
import React from 'react'
import ProfileSideMenu from '../../components/SideMenus/ProfileSideMenu'
import avatar from '../../images/logo512.png'

const ProfilePage = () => {
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <ProfileSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>My Account</h1>
        <hr style={{ color: '#222831', width: '97%' }} />

        <div style={{ display: 'flex', float: 'left ', width: '30%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
          <Image src={avatar} roundedCircle={true} className="mt-5 mr-5" style={{ backgroundColor: 'black', width: '70%' }} />
        </div>

        <div style={{ width: '70%', float: "right" }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Teoman Bayoğlu</h1>
          <p style={{ fontSize: '1.5rem' }}>Contact</p>
          <p style={{ fontSize: '1.1rem' }}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod</p>
          <p style={{ fontSize: '1.5rem' }}>Biography</p>
          <p style={{ fontSize: '1.1rem' }}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod</p>
          <p style={{ fontSize: '1.5rem' }}>Links</p>
          <p style={{ fontSize: '1.1rem' }}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod</p>
          <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Edit</Button>
        </div>

      </div>
    </div>

  )
}

export default ProfilePage