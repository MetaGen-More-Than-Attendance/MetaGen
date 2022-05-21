import React from 'react'
import SideMenu from '../../components/SideMenus/SideMenu'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const LecDetCalendar = () => {
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15, marginTop: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>{localStorage.getItem("lectureName")}</h1>
        <hr style={{ color: '#222831', width: '100%' }} />
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  )
}

export default LecDetCalendar