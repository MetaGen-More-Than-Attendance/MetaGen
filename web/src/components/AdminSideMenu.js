import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const AdminSideMenu = () => {
    const navigate = useNavigate();
    return (
        <ListGroup style={{ width: "13%", height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 120 }} onClick={() => navigate("/admin/addTeacher")}>Add Teacher</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/admin/addStudent")}>Add Student</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/admin/addLecture")}>Add Lecture</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/admin/addSemester")}>Add Semester</ListGroup.Item>
        </ListGroup>
    )
}

export default AdminSideMenu