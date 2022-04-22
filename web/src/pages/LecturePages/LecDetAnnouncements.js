import React from 'react'
import SideMenu from '../../components/SideMenus/SideMenu'

const LecDetAnnouncements = () => {
  return (
    <div style={{ height: "80vh", display: 'flex' }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15, marginTop: 15}}>
          <h1>Announcements</h1>
      </div>
    </div>
  )
}

export default LecDetAnnouncements