import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ProfileSideMenu = () => {
    const navigate = useNavigate();
    return (
        <ListGroup style={{height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 140, }} onClick={() => navigate("/profile")}>Profile</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/profile/settings")}>Settings</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/profile/myLectures")}>Lectures</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/profile/semester")}>Semester</ListGroup.Item>
        </ListGroup>
    )
}

export default ProfileSideMenu