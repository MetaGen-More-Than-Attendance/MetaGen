import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import Swal from 'sweetalert2';

import { postSemester } from '../../redux/features/semester/semesterSlice';

const AddSemesterForm = () => {

    const initialValues = {
        semesterName: "",
        startDate: "",
        endDate: "",
    };

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    const errors = {};

                    if (!values.semesterName) {
                        errors.semesterName = "*";
                    }
                    if (!values.startDate) {
                        errors.startDate = "*";
                    }
                    if (!values.endDate) {
                        errors.endDate = "*";
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    dispatch(postSemester(values));
                    resetForm({
                        values: {
                            semesterName: '',
                            startDate: '',
                            endDate: '',
                        },
                        isSubmitting: true
                    })
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
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
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.semester && touched.semester && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.semester}
                                    </div>
                                )}
                                <Form.Label>Semester</Form.Label>
                            </div>
                            <Form.Select
                                name="semesterName"
                                value={values.semesterName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ color: 'gray', width: '67%' }}
                            >
                                <option disabled value="" >Choose one semester</option>
                                <option value="Fall" style={{ color: 'black' }}>Fall</option>
                                <option value="Spring" style={{ color: 'black' }}>Spring</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.startDate && touched.startDate && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.startDate}
                                    </div>
                                )}
                                <Form.Label>Start Date</Form.Label>
                            </div>
                            <Form.Control
                                type="date"
                                name="startDate"
                                value={values.startDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.endDate && touched.endDate && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.endDate}
                                    </div>
                                )}
                                <Form.Label>Finish Date</Form.Label>
                            </div>
                            <Form.Control
                                type="date"
                                name="endDate"
                                value={values.endDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                            Submit
                        </Button>
                    </Form>
                )}


            </Formik>
        </div>
    )
}

export default AddSemesterForm