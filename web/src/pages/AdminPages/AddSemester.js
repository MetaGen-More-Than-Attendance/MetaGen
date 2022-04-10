import React from 'react'
import { Button, Form } from 'react-bootstrap'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu';
import { Formik } from "formik";

const AddSemester = () => {

    const initialValues = {
        semester: "",
        startDate: "",
        finishDate: "",
    };

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Semester Informations</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};

                        if (!values.semester) {
                            errors.semester = "*";
                        }
                        if (!values.startDate) {
                            errors.startDate = "*";
                        }
                        if (!values.finishDate) {
                            errors.finishDate = "*";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
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
                                    name="semester"
                                    value={values.semester}
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
                                    {errors.finishDate && touched.finishDate && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.finishDate}
                                        </div>
                                    )}
                                    <Form.Label>Finish Date</Form.Label>
                                </div>
                                <Form.Control
                                    type="date"
                                    name="finishDate"
                                    value={values.finishDate}
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

            </div >
        </div >
    )
}

export default AddSemester

