import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import img from "../../images/java.jpeg";
import QRCode from "react-qr-code";
import { useNavigate } from 'react-router-dom';

const LectureCard = ({ lectureName, lectureInfo, isTeacher, lectureId }) => {
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        setText({lectureId});
    };

    const handleDetail = () => {
        navigate("/lectureDetails")
        localStorage.setItem("lectureId", lectureId)
        localStorage.setItem("lectureName", lectureName)
    };

    const navigate = useNavigate();

    return (
        <div>
            <Card style={{ width: '80%', height: '100%', margin: '2rem', borderWidth: 1, borderColor: "#393E46", borderRadius: 20, boxShadow: "1px 1px 1px 1px #393E46" }}>
                <Card.Img variant="top" src={img} style={{ height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                <Card.Body>
                    <Card.Title style={{ display: "flex", justifyContent: "center" }}>{lectureName}</Card.Title>
                    <Card.Text>
                        {lectureInfo}
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", color: "#222831", fontWeight: "bold", width: '35%', }} onClick={handleDetail} >Details</Button>
                        {isTeacher && <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", color: "#222831", fontWeight: "bold", width: '60%', }} onClick={handleShow} >
                            Generate Qr Code
                        </Button>}
                    </div>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>QR Code of {lectureName}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: "center" }} >
                    <QRCode value={(text.lectureId)?.toString()} />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LectureCard