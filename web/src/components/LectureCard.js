import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import img from "./logo192.png";
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
            <Card border="primary" style={{ width: '18rem', margin: '2rem' }}>
                <Card.Img variant="top" src={img} style={{ height: '7rem' }} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" style={{ marginBottom: '10px' }}>Show more</Button>
                    <Button variant="primary" onClick={handleShow} >
                        Generate Qr Code
                    </Button>
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