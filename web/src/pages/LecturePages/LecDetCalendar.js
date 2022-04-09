import React from 'react'
import SideMenu from '../../components/SideMenu'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const LecDetCalendar = () => {
  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <SideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15, marginTop: 15 }}>
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