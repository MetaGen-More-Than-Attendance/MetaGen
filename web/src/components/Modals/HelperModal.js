import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import { Button, Modal, Form } from 'react-bootstrap'

const HelperModal = ({ show, handleClose, data }) => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                surname: "",
                identityNumber: "",
                department: "",
                userMail: "",
            }
        }
    )

    const changeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        setIsFilePicked(true);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Teacher</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={data}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "*";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "*Invalid email address!";
                        }
                        if (!values.name) {
                            errors.name = "*";
                        }
                        if (!values.surname) {
                            errors.surname = "*";
                        }
                        if (!values.identityNumber) {
                            errors.identityNumber = "*";
                        }
                        if (!values.department) {
                            errors.department = "*";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values)
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={changeHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div style={{ display: "flex" }}>
                                    {errors.name && touched.name && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.name}
                                        </div>
                                    )}
                                    <Form.Label>Name</Form.Label>
                                </div>

                                <Form.Control
                                    type="input"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div style={{ display: "flex" }}>
                                    {errors.surname && touched.surname && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.surname}
                                        </div>
                                    )}
                                    <Form.Label>Surname</Form.Label>
                                </div>

                                <Form.Control
                                    type="input"
                                    name="surname"
                                    value={values.surname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div style={{ display: "flex" }}>
                                    {errors.identityNumber && touched.identityNumber && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.identityNumber}
                                        </div>
                                    )}
                                    <Form.Label>Identity Number</Form.Label>
                                </div>

                                <Form.Control
                                    type="input"
                                    name="identityNumber"
                                    value={values.identityNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autofocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div style={{ display: "flex" }}>
                                    {errors.department && touched.department && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.department}
                                        </div>
                                    )}
                                    <Form.Label>Department</Form.Label>
                                </div>

                                <Form.Control
                                    type="input"
                                    name="department"
                                    value={values.department}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <div style={{ display: "flex" }}>
                                    {errors.email && touched.email && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.email}
                                        </div>
                                    )}
                                    <Form.Label>Email address</Form.Label>
                                </div>

                                <Form.Control
                                    type="email"
                                    name="userMail"
                                    value={values.userMail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autofocus
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default HelperModal