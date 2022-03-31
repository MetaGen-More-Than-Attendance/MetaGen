import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import img from "../images/java.jpeg";
import QRCode from "react-qr-code";

const LectureCard = () => {
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        const date = new Date();
        setText(date.toLocaleDateString() + date.toLocaleTimeString());
    };

    return (
        <div>
            <Card style={{ width: '18rem', margin: '2rem', borderWidth: 1 ,borderColor: "#393E46", borderRadius: 20, boxShadow:"1px 1px 1px 1px #393E46" }}>
                <Card.Img variant="top" src={img} style={{ height: '7rem', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                <Card.Body>
                    <Card.Title style={{ display: "flex", justifyContent: "center"}}>Lecture Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} >Details</Button>
                    <Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleShow} >
                        Generate Qr Code
                    </Button>
                    </div>
                   
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Today's QR</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ alignItems: 'center' }}>
                    <QRCode value={text} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LectureCard