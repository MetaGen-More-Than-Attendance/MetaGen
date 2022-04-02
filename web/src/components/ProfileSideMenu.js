import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const ProfileSideMenu = () => {
    const navigate = useNavigate();
    return (
        <ListGroup style={{ width: "13%", height: "80%", backgroundColor: "#222831", marginTop: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE", marginTop: 110 }} onClick={() => navigate("/profile")}>Profile</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/profile/settings")}>Settings</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} onClick={() => navigate("/profile/lectures")}>Lectures</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} >yyyyy</ListGroup.Item>
            <ListGroup.Item action variant="dark" style={{ backgroundColor: "#222831", color: "#EEE" }} >zzzzz</ListGroup.Item>
        </ListGroup>
    )
}

export default ProfileSideMenu