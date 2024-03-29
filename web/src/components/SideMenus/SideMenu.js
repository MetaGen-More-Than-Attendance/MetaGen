import React from 'react'
import { Dropdown, DropdownButton, ListGroup, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    return (
        <ListGroup style={{ height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 110 }} onClick={() => navigate("/lectureDetails")}>Home</ListGroup.Item>
            {localStorage.getItem("isTeacher") === "true" ?
                <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/people")}>Students</ListGroup.Item>
                :
                null
            }
            {localStorage.getItem("isStudent") === "true" ?
                <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/myAttendances")}>Attendance</ListGroup.Item> :
                <DropdownButton action variant="dark" as={ButtonGroup} title="Attendance" id="bg-vertical-dropdown-2" style={{ backgroundColor: "#222831", color: "#EEE" }}>
                    <Dropdown.Item eventKey="1" onClick={() => navigate("/lectureDetails/attendance")}>Specific Attendances</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => navigate("/lectureDetails/allAttandances")}>All Attendances</Dropdown.Item>
                </DropdownButton>
            }

            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/calendar")}>Calendar</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/lectureDetails/announcements")}>Announcements</ListGroup.Item>
        </ListGroup>
    )
}

export default SideMenu