import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();
    
    return (
        <ListGroup style={{ height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 110 }} onClick={() => navigate("/lectureDetails")}>Home</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/people")}>People</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/attendance")}>Attendance</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/calendar")}>Calendar</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/announcements")}>Announcements</ListGroup.Item>
        </ListGroup>
    )
}

export default SideMenu