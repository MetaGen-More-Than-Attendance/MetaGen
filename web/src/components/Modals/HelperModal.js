import React, { useState } from 'react'
import { Formik } from 'formik';
import { Modal, Form } from 'react-bootstrap'
import axios from "axios";
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';

const HelperModal = ({ show, handleClose, data }) => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        setIsFilePicked(true);
    };

    const navigate = useNavigate()

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
                        if (!values.userMail) {
                            errors.userMail = "*";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userMail)
                        ) {
                            errors.userMail = "*Invalid email address!";
                        }
                        if (!values.userName) {
                            errors.userName = "*";
                        }
                        if (!values.userSurname) {
                            errors.userSurname = "*";
                        }
                        if (!values.identityNumber) {
                            errors.identityNumber = "*";
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        let timerInterval
                        Swal.fire({
                            title: 'Update Teacher',
                            html: 'Teacher will update in <b></b> milliseconds.',
                            timer: 5000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer')
                            }
                        })

                        setTimeout(() => {
                            axios
                                .put(`https://meta-gen.herokuapp.com/api/instructor/update?instructorId=${values.instructorId}`, values)
                                .then((res) => console.log(res))
                                .catch((err) => console.log(err));
                        }, 5000);

                        setTimeout(() => {
                            navigate(0)
                        }, 6000);
                        
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Label>Image</Form.Label>
                            <input type="file" onChange={changeHandler} name="photoPath" />

                            <div style={{ display: "flex" }}>
                                {errors.userName && touched.userName && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.userName}
                                    </div>
                                )}
                                <Form.Label>Name</Form.Label>
                            </div>
                            <Form.Control
                                type="input"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                            />

                            <div style={{ display: "flex" }}>
                                {errors.userSurname && touched.userSurname && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.userSurname}
                                    </div>
                                )}
                                <Form.Label>Surname</Form.Label>
                            </div>
                            <Form.Control
                                type="input"
                                name="userSurname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userSurname}
                            />

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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.identityNumber}
                            />

                            {/* <div style={{ display: "flex" }}>
                                {errors.department && touched.department && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.department}
                                    </div>
                                )}
                                <Form.Label>Department</Form.Label>
                            </div>
                           
                            <input
                                type="input"
                                name="department"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.department}
                            /> */}

                            <div style={{ display: "flex" }}>
                                {errors.userMail && touched.userMail && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.userMail}
                                    </div>
                                )}
                                <Form.Label>Email address</Form.Label>
                            </div>
                            <Form.Control
                                className='mb-3'
                                type="email"
                                name="userMail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userMail}
                            />
                            <button type="submit" disabled={isSubmitting} style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default HelperModal