import React from 'react'
import { DropdownButton, ListGroup, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const AdminSideMenu = () => {
    const navigate = useNavigate();
    return (
        <ListGroup style={{ width: "13%", height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <DropdownButton action variant="dark" as={ButtonGroup} title="Teacher" id="bg-vertical-dropdown-2" className="mb-3" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 120 }}>
                <Dropdown.Item eventKey="1" onClick={() => navigate("/admin/addTeacher")}>Add Teacher</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => navigate("/admin/displayTeachers")}>Display Teachers</Dropdown.Item>
            </DropdownButton>

            <DropdownButton action variant="dark" as={ButtonGroup} title="Student" id="bg-vertical-dropdown-2" className="mb-3" style={{ backgroundColor: "#222831", color: "#EEE" }}>
                <Dropdown.Item eventKey="1" onClick={() => navigate("/admin/addStudent")}>Add Student</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => navigate("/admin/displayStudents")}>Display Students</Dropdown.Item>
            </DropdownButton>

            <DropdownButton action variant="dark" as={ButtonGroup} title="Lecture" id="bg-vertical-dropdown-2" className="mb-3" style={{ backgroundColor: "#222831", color: "#EEE" }}>
                <Dropdown.Item eventKey="1" onClick={() => navigate("/admin/addLecture")}>Add Lecture</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => navigate("/admin/displayLectures")}>Display Lectures</Dropdown.Item>
            </DropdownButton>

            <DropdownButton action variant="dark" as={ButtonGroup} title="Semester" id="bg-vertical-dropdown-2" className="mb-3" style={{ backgroundColor: "#222831", color: "#EEE" }}>
                <Dropdown.Item eventKey="1" onClick={() => navigate("/admin/addSemester")}>Add Semester</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => navigate("/admin/displaySemesters")}>Display Semesters</Dropdown.Item>
            </DropdownButton>

        </ListGroup>
    )
}

export default AdminSideMenu